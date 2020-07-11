const knex = require('knex');
const app = require('../src/app');
const expect = require('chai').expect;

describe('Folder Endpoints', function() {
	let db;

	before('make knex instance', () => {
		db = knex({
			client: 'pg',
			connection: process.env.TEST_DATABASE_URL
		});
		app.set('db', db);
	});

	after('disconnect from db', () => db.destroy());

	before('clean the table', () =>
		db.raw('TRUNCATE note, folder RESTART IDENTITY CASCADE')
	);

	afterEach('cleanup', () =>
		db.raw('TRUNCATE note, folder RESTART IDENTITY CASCADE')
	);

	// ************************

	describe(`GET /api/folders`, () => {
		context(`Given no folders`, () => {
			it(`responds with 200 and an empty list`, () => {
				return supertest(app)
					.get('/api/folders')
					.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
					.expect(200, []);
			});
		});

		context('Given there are folders in the database', () => {
	// 		const testFolder = makeFolderArray();

	// 		beforeEach('insert folders', () => {
	// 			return db.into('folder').insert(testFolder);
	// 		});

			it('responds with 200 and all of the folders', () => {
				return supertest(app)
					.get('/api/folders')
					.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
					.expect(200, testFolder);
			});
		});

	// });

	describe(`GET /api/folders/:folder_id`, () => {
		context(`Given no folder`, () => {
			it(`responds with 404`, () => {
				const id_folder = 123456;
				return supertest(app)
					.get(`/api/folders/${id_folder}`)
					.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
					.expect(404, { error: { message: `Folder Not Found` } });
			});
		});

		context('Given there are folders in the database', () => {
			// const testFolder = makeFolderArray();

			// beforeEach('insert folder', () => {
			// 	return db.into('folder').insert(testFolder);
			// });

			it('responds with 200 and the specified folder', () => {
				const id_folder = 2;
				const expectedFolder = testFolder[id_folder - 1];
				return supertest(app)
					.get(`/api/folders/${id_folder}`)
					.set('Authorization', `Bearer ${process.env.API_TOKEN}`)
					.expect(200, expectedFolder);
			});
		});

	});

	}