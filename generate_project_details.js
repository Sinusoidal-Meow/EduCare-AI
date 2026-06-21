const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const outputFile = path.join(projectRoot, 'project_overview_for_claude.md');

const ignoreDirs = ['node_modules', 'dist', '.git', '.agents', '.idea'];
const ignoreFiles = ['package-lock.json', 'skills-lock.json', 'generate_project_details.js', 'project_overview_for_claude.md'];

function getFunctionDescription(filePath) {
    const lowerPath = filePath.toLowerCase();
    if (lowerPath.includes('package.json')) return 'Defines project dependencies and scripts.';
    if (lowerPath.includes('server.js')) return 'Main entry point for the backend server. Configures Express, middleware, routes, and event bus.';
    if (lowerPath.includes('tailwind.config.js')) return 'Configuration for Tailwind CSS, including custom color themes and animations.';
    if (lowerPath.includes('vite.config.js')) return 'Vite bundler configuration, including proxy setup for the backend API.';
    if (lowerPath.includes('eventbus.js')) return 'Centralized Event Bus for cross-module communication.';
    if (lowerPath.includes('controller')) return 'Handles incoming HTTP requests, processes business logic, and sends responses.';
    if (lowerPath.includes('route')) return 'Defines API endpoints and maps them to respective controllers.';
    if (lowerPath.includes('model')) return 'Defines data schemas or structures (e.g., for physical activities or progress).';
    if (lowerPath.includes('service') || lowerPath.includes('engine')) return 'Contains core business logic, simulation behavior, or AI generation capabilities.';
    if (lowerPath.includes('index.html')) return 'Root HTML template for the frontend application.';
    if (lowerPath.includes('.env')) return 'Environment variable definitions/examples.';
    if (lowerPath.includes('data') && lowerPath.endsWith('.js')) return 'Static mock data or curriculum definitions.';
    return 'Source code file.';
}

function scanDirectory(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const relativePath = path.relative(projectRoot, fullPath);
        
        if (ignoreDirs.some(ignore => relativePath.includes(ignore))) continue;
        if (ignoreFiles.some(ignore => relativePath.includes(ignore))) continue;
        
        if (fs.statSync(fullPath).isDirectory()) {
            scanDirectory(fullPath, fileList);
        } else {
            fileList.push(fullPath);
        }
    }
    return fileList;
}

const allFiles = scanDirectory(projectRoot);

let mdContent = `# EduCare AI Project Details\n\n`;
mdContent += `This document contains the details and complete content of all project files, provided for AI context.\n\n`;
mdContent += `> **Important Note:** The \`frontend/src\` directory appears to be missing from the project entirely. The frontend currently only has configuration files and an \`index.html\`.\n\n`;

mdContent += `## File Listing & Contents\n\n`;

for (const file of allFiles) {
    const relativePath = path.relative(projectRoot, file).replace(/\\/g, '/');
    const ext = path.extname(file).slice(1) || 'text';
    const description = getFunctionDescription(relativePath);
    
    let content = '';
    try {
        content = fs.readFileSync(file, 'utf8');
    } catch (err) {
        content = `// Could not read file: ${err.message}`;
    }

    mdContent += `### \`${relativePath}\`\n`;
    mdContent += `**Function:** ${description}\n\n`;
    mdContent += `\`\`\`${ext}\n${content}\n\`\`\`\n\n`;
    mdContent += `---\n\n`;
}

fs.writeFileSync(outputFile, mdContent);
console.log(`Successfully generated ${outputFile}`);
