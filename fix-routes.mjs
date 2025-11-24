import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

// Read the generated _routes.json
const routesPath = join(process.cwd(), 'dist', '_routes.json');
const routes = JSON.parse(readFileSync(routesPath, 'utf-8'));

// Remove individual /research/*.png entries if /research/* wildcard exists
if (routes.exclude && routes.exclude.includes('/research/*')) {
  routes.exclude = routes.exclude.filter(rule => {
    // Keep the rule if it's not a specific research file or if it's the wildcard
    return !rule.startsWith('/research/') || rule === '/research/*';
  });
}

// Write back the fixed routes
writeFileSync(routesPath, JSON.stringify(routes, null, 2));
console.log('✅ Fixed _routes.json - removed overlapping rules');
