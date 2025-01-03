/*
    +----+------------+---------+-------+
| id | student_id | subject | score |
+----+------------+---------+-------+
|  1 |          1 | Math    |    85 |
|  2 |          1 | English |    90 |
|  3 |          2 | Math    |    92 |
|  4 |          2 | English |    88 |
+----+------------+---------+-------+

+----+------+------+-------+-------+
| id | name | age  | grade | class |
+----+------+------+-------+-------+
|  1 | john |   16 |     1 | A     |
|  2 | Amy  |   16 |     1 | B     |
|  3 | Tom  |   17 |     2 | A     |
|  4 | Mike |   17 |     2 | B     |
+----+------+------+-------+-------+
Q1
SELECT * FROM STUDENTS WHERE CLASS = 'A';

Q2
SELECT * FROM STUDENTS WHERE AGE = 17;

Q3
SELECT * FROM STUDENTS WHERE GRADE = 1 AND CLASS= 'B';

Q4
SELECT NAME, SUBJECT, SCORE FROM STUDENTS A JOIN GRADES B WHERE A.ID = B.STUDENT_ID AND A.NAME = 'john';

Q5
SELECT NAME, SUBJECT FROM STUDENTS A, GRADES B WHERE B.STUDENT_ID = A.ID AND B.SUBJECT = 'Math';

Q6
SELECT NAME, SUBJECT, SCORE FROM GRADES A JOIN STUDENTS B ON A.STUDENT_ID = B.ID AND SCORE > 84;

Q7
SELECT COUNT(DISTINCT CLASS) FROM STUDENTS;
SELECT CLASS, COUNT(*) AS CLASSCOUNT FROM STUDENTS GROUP BY CLASS;



*/

const maria = require("mariadb");

const pool = maria.createPool({
    host: "localhost",   // MariaDB 서버 주소 (로컬 서버일 경우 'localhost')
    user: "root",      // 사용자 이름
    password: 'master',  // 비밀번호
    database: 'firstDB', // 사용할 데이터베이스 이름
    connectionLimit: 5  // 최대 연결 수
});

async function connectDatabase() {
    let connection;
    try {
        // 연결 시도
        connection = await pool.getConnection();
        console.log("maria DB 연결 성공");

        const result = await connection.query(`
            SELECT NAME, SUBJECT, SCORE
                FROM STUDENTS A JOIN GRADES B
                WHERE A.ID = B.STUDENT_ID
                AND A.NAME = 'john'
        `);
        console.log(result);

        for (let i = 0; i < result.length; i++) {
            console.log(result[i].NAME, result[i].SUBJECT, result[i].SCORE);
        }

        await connection.end();

    } catch (err) {
        console.error('DB 연결 중 에러남', err);
    } finally {
        if (connection) {
            connection.end();
        }
    }
}

connectDatabase();
