"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFaqList = void 0;
const getFaqList = async (fastify) => {
    const connection = await fastify['mysql'].getConnection();
    let value = [];
    try {
        const [sections] = await connection.query(`SELECT id, name FROM faqSections ORDER BY sequence;`);
        const [questions] = await connection.query(`SELECT question, answer, sectionId FROM faqQuestions ORDER BY sequence;`);
        value = sections.map((x) => {
            return {
                category: x.name,
                children: questions.filter((y) => y.sectionId === x.id).map((z) => {
                    return {
                        title: z.question,
                        content: z.answer,
                    };
                }),
            };
        });
    }
    finally {
        connection.release();
        return value;
    }
};
exports.getFaqList = getFaqList;
//# sourceMappingURL=faq.js.map