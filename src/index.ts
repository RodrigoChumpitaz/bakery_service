import app from "./app"
import { seedDatabase } from "./seeders";
import { DatabaseConnection } from "./shared";
import 'dotenv/config';

(async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
    await DatabaseConnection.default();
    await seedDatabase();
})();