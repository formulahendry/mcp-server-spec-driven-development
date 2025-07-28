import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { completable } from "@modelcontextprotocol/sdk/server/completable.js";

export function createServer(): McpServer {
  const server = new McpServer({
    name: "Spec-Driven Development MCP Server",
    version: "0.1.0",
  });

  server.registerPrompt(
    "generate-requirements",
    {
      title: "Generate Requirements Document",
      description: "Generate requirements.md using EARS format",
      argsSchema: { 
        requirements: z.string().describe("High-level requirements of the application. Example: 'A Vue.js todo application with task creation, completion tracking, and local storage persistence'")
      }
    },
    ({ requirements }) => ({
      messages: [{
        role: "user",
        content: {
          type: "text",
          text: `Based on below requirements, generate requirements.md using EARS format in 'specs' folder:\n\n${requirements}`
        }
      }]
    })
  );

  server.registerPrompt(
    "generate-design-from-requirements",
    {
      title: "Generate Design Document from Requirements Document",
      description: "Generate design.md from requirements.md",
    },
    () => ({
      messages: [{
        role: "user",
        content: {
          type: "text",
          text: `Based on specs/requirements.md, generate specs/design.md`
        }
      }]
    })
  );

  server.registerPrompt(
    "generate-code-from-design",
    {
      title: "Generate Code from Design Document",
      description: "Generate code from design.md"
    },
    () => ({
      messages: [{
        role: "user",
        content: {
          type: "text",
          text: `Based on specs/design.md, generate code on the root folder`
        }
      }]
    })
  );

  return server;
}
