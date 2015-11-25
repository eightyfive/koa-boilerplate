
-- Edit this schema to your liking
-- profile::json is supposed to be the {} return by passportjs upon authentication
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email character varying(50) NOT NULL,
  username character varying(50),
  profile json
);