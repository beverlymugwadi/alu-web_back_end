DELIMITER $$

CREATE PROCEDURE ComputeAverageWeightedScoreForUser(IN user_id INT)
BEGIN
    DECLARE total_weight INT DEFAULT 0;
    DECLARE weighted_sum FLOAT DEFAULT 0;
    DECLARE average_weighted_score FLOAT DEFAULT 0;

    -- Compute the total weight for all projects the user has corrections for
    SELECT SUM(p.weight)
    INTO total_weight
    FROM projects p
    JOIN corrections c ON c.project_id = p.id
    WHERE c.user_id = user_id;

    -- Compute the weighted sum of scores
    SELECT SUM(c.score * p.weight)
    INTO weighted_sum
    FROM projects p
    JOIN corrections c ON c.project_id = p.id
    WHERE c.user_id = user_id;

    -- Calculate average weighted score (avoid division by zero)
    IF total_weight > 0 THEN
        SET average_weighted_score = weighted_sum / total_weight;
    ELSE
        SET average_weighted_score = 0;
    END IF;

    -- Update the user's average_score in the users table
    UPDATE users
    SET average_score = average_weighted_score
    WHERE id = user_id;
END$$

DELIMITER ;
