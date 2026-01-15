import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

// ES 모듈에서는 __dirname을 사용할 수 없으므로, import.meta.url을 사용하여 현재 파일의 경로를 얻습니다.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 1. .env 파일 로드 (환경변수 설정)
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const GITHUB_TOKEN = process.env.VITE_GITHUB_TOKEN;

// 2. 토큰 유효성 검사
if (!GITHUB_TOKEN) {
  console.error("❌ [Error] .env 파일에서 VITE_GITHUB_TOKEN을 찾을 수 없습니다.");
  console.error("   .env 파일에 토큰이 올바르게 설정되어 있는지 확인해주세요.");
  process.exit(1);
}

console.log("🔄 GitHub GraphQL Schema 다운로드 중...");

try {
  const schemaPath = path.resolve(__dirname, "../schema.graphql");
  const command = `npx get-graphql-schema https://api.github.com/graphql -h "Authorization=Bearer ${GITHUB_TOKEN}" > ${schemaPath}`;

  // 명령어 실행
  execSync(command, { stdio: "inherit" });

  console.log(`✅ 스키마 다운로드 완료! (${schemaPath})`);
} catch (error) {
  console.error("❌ 스키마 다운로드 중 오류가 발생했습니다:", error);
  process.exit(1);
}
