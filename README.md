1. npm i
2. Создать файл в корне проекта .env
3. Написать в нем DATABASE_URL="file:./dev.db"
3.1 Написать так же в нем AUTH_SECRET="рандомная_строка"
4. npx prisma generate
5. npm run dev