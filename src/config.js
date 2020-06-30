module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_TOKEN: process.env.API_TOKEN || 'dummy-api-token',
  TEST_DATABASE_URL:
		process.env.TEST_DATABASE_URL || 'postgresql://noteful@localhost/note-test',
	DATABASE_URL:
		process.env.DATABASE_URL || 'postgres://kvbsxavlswacnt:938fcfef2d19802a6a7894031e5264d9b2fbf3b99331678d265ac70a90574142@ec2-34-200-101-236.compute-1.amazonaws.com:5432/d69blgcd6o59jn?ssl=true'
}