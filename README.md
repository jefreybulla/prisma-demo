# prisma-demo
Sample app to show how Prisma ORM works.

## Development set up
Create an `.env` file to specify your db location. You can use the following content
```
DATABASE_URL="file:./dev.db"
```
Install dependencies
```
npm install
```
Run database migrations with
```
npx prisma migrate dev
```

Open Prisma GUI to view and edit database data
```
npx prisma studio
```

# Update schema and run migrations
Make changes to schema in file `schema.prisma` and then run migration with:
```
npx prisma migrate dev --name <add_a_migration_name_here>
```