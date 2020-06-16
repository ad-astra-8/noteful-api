module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
  DB_URL: process.env.DB_URL || 'postgresql://noteful@localhost/noteful',
  TEST_DATABASE_URL:
		process.env.TEST_DATABASE_URL || 'postgresql://noteful@localhost/note-test',
	DATABASE_URL:
		process.env.DATABASE_URL || 'postgresql://noteful@localhost/note'
}