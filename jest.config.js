module.exports = {
    roots: ["<rootDir>/src"],
    testEnvironmnet: "node",
    transform: {
        ".+\\.ts$": "ts-jest",
    },
    moduleNameMapper: {
        "@/(.*)": "<rootDir>/src/$1",
    },
};
