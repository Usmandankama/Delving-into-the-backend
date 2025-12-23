import {Elysia} from "elysia";
import {db} from "./db.ts";


const app = new Elysia();


app.post("/students", async ({body}) => {
    const {name, email, age} = body as {
        name: string; 
        email: string; 
        age: number
    };

    if (!name || !email || !age) {
        return {error: "Missing required fields"};
    }

    await db.execute(
        "INSERT INTO students (name, email, age) VALUES (?, ?, ?)",
        [name, email, age]
    );
    return {message: "Student added successfully"};

    
});


app.get("/students", async () => {
    const [rows] = await db.execute("SELECT * FROM students");
    return rows;
});

app.listen(3000);

console.log("🚀 API running on http://localhost:3000");

