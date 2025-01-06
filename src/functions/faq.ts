import { FastifyInstance } from "fastify";

export const getFaqList = async (fastify: FastifyInstance) => {
    const connection = await fastify['mysql'].getConnection();
    let value: any = [];

    try {
        const [sections] = await connection.query(`SELECT id, name FROM faqSections ORDER BY sequence;`);
        const [questions] = await connection.query(`SELECT question, answer, sectionId FROM faqQuestions ORDER BY sequence;`);

        value = sections.map((x: any) => {
            return {
                category: x.name,
                children: questions.filter((y: any) => y.sectionId === x.id).map((z: any) => {
                    return {
                        title: z.question,
                        content: z.answer,
                    }
                }),
            }
        });
    }
    finally {
        connection.release();
        return value;
    }
}