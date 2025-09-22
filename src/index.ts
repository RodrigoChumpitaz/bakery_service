import app from "./app"
import { seedDatabase } from "./seeders";
import { DatabaseConnection } from "./shared";

(async () => {
    app.listen(Bun.env.PORT, () => {
        console.log(`Server is running on http://localhost:${Bun.env.PORT}`);
    });
    await DatabaseConnection.default();
    await seedDatabase();
})();