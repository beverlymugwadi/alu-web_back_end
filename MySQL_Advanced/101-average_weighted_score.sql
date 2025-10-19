DELIMITER $$

CREATE PROCEDURE ComputeAverageWeightedScoreForUsers()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE userId INT;

    -- Cursor to iterate over all users
    DECLARE user_cursor CURSOR FOR SELECT id FROM users;
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN user_cursor;

    read_loop: LOOP
        FETCH user_cursor INTO userId;
        IF done THEN
            LEAVE read_loop;
        END IF;

        -- Compute and update average weighted score for this user
        UPDATE users
        SET average_score = (
            SELECT 
                IFNULL(SUM(c.score * p.weight) / SUM(p.weight), 0)
            FROM corrections c
            JOIN projects p ON c.project_id = p.id
            WHERE c.user_id = userId
        )
        WHERE id = userId;

    END LOOP;

    CLOSE user_cursor;
END$$

DELIMITER ;
