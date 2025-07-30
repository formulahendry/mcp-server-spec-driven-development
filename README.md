# Spec-Driven Development MCP Server

[![NPM Downloads](https://img.shields.io/npm/d18m/mcp-server-spec-driven-development)
](https://www.npmjs.com/package/mcp-server-spec-driven-development) [![Install in VS Code](https://img.shields.io/badge/Install_MCP_Server_(npx)-VS_Code-0098FF)](https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522spec-driven%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522-y%2522%252C%2522mcp-server-spec-driven-development%2540latest%2522%255D%257D) 

Model Context Protocol (MCP) server that facilitates spec-driven development workflows by providing structured prompts for generating requirements, design documents, and code following a systematic approach.

<a href="https://glama.ai/mcp/servers/@formulahendry/mcp-server-spec-driven-development">
  <img width="380" height="200" src="https://glama.ai/mcp/servers/@formulahendry/mcp-server-spec-driven-development/badge" alt="Spec-Driven Development Server MCP server" />
</a>

## 🎯 Purpose

This MCP server enables developers to follow a structured spec-driven development approach by providing prompts that guide you through:

1. **Requirements Generation** - Create detailed requirements documents using the EARS (Easy Approach to Requirements Syntax) format
2. **Design Generation** - Generate design documents based on requirements
3. **Code Generation** - Generate implementation code based on design documents

## ✨ Features

- **Structured Workflow**: Follows a clear progression from **requirements** → **design** → **code**
- **EARS Format Support**: Uses industry-standard EARS format for requirements documentation
- **MCP Protocol**: Integrates seamlessly with MCP-compatible tools and environments

## 🚀 Quick Start

### Prerequisites

- Node.js 20+ 

### Installation

Install the MCP server in VS Code using below buttons:

[![Install in VS Code](https://img.shields.io/badge/Install_MCP_Server_(npx)-VS_Code-0098FF)](https://insiders.vscode.dev/redirect?url=vscode%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522spec-driven%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522-y%2522%252C%2522mcp-server-spec-driven-development%2540latest%2522%255D%257D) [![Install in VS Code Insiders](https://img.shields.io/badge/Install_MCP_Server_(npx)-VS_Code_Insiders-24bfa5)](https://insiders.vscode.dev/redirect?url=vscode-insiders%3Amcp%2Finstall%3F%257B%2522name%2522%253A%2522spec-driven%2522%252C%2522command%2522%253A%2522npx%2522%252C%2522args%2522%253A%255B%2522-y%2522%252C%2522mcp-server-spec-driven-development%2540latest%2522%255D%257D)

Alternatively, you can add configuration in `mcp.json`:

```json
{
    "servers": {
        "spec-driven": {
            "command": "npx",
            "args": [
                "-y",
                "mcp-server-spec-driven-development@latest"
            ]
        }
    }
}
```

## 📋 Available Prompts

### 1. Generate Requirements Document
- **Name**: `generate-requirements`
- **Description**: Generate requirements.md using EARS format
- **Input**: High-level requirements of the application. Example: 'A Vue.js todo application with task creation, completion tracking, and local storage persistence'
- **Output**: Structured requirements document in `specs/requirements.md`

### 2. Generate Design from Requirements
- **Name**: `generate-design-from-requirements`
- **Description**: Generate design.md from requirements.md
- **Input**: Reads from `specs/requirements.md`
- **Output**: Design document in `specs/design.md`

### 3. Generate Code from Design
- **Name**: `generate-code-from-design`
- **Description**: Generate code from design.md
- **Input**: Reads from `specs/design.md`
- **Output**: Implementation code in the root folder

## 📖 Workflow Example

1. **Start with Requirements**: Use the `generate-requirements` prompt with your initial requirements text
2. **Create Design**: Use `generate-design-from-requirements` to create a design document based on your requirements
3. **Generate Code**: Use `generate-code-from-design` to generate implementation code from your design

This creates a traceable path from requirements through design to implementation, ensuring consistency and completeness in your development process.

## 🤔 Why Spec-Driven Development?

Moving beyond Vibe Coding to a structured, specification-driven approach brings clarity, consistency, and maintainability to your development workflow. Instead of coding by intuition alone, Spec-Driven Development provides a systematic foundation that scales with your project's complexity.

Learn more about the benefits: [Goodbye, Vibe Coding! Hello, Spec-Driven Development MCP Server!](https://dev.to/formulahendry/goodbye-vibe-coding-hello-spec-driven-development-mcp-server-2m17)