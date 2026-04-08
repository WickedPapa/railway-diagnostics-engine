import re
import os

file_path = r'c:\Users\pmont\Desktop\Development\Repo-Private\railway-diagnostics-engine\dictionary_data.js'

with open(file_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
for line in lines:
    # Match "descrizione_custom": "..."
    match = re.search(r'^(\s*"descrizione_custom":\s*")(.*)(".*)$', line)
    if match:
        prefix = match.group(1)
        value = match.group(2)
        suffix = match.group(3)
        
        if value:
            # Uppercase
            value = value.upper()
            
            # If it contains ':', ensure exactly one space after the FIRST colon
            if ':' in value:
                parts = value.split(':', 1)
                value = parts[0] + ': ' + parts[1].strip()
            
            new_lines.append(prefix + value + suffix + '\n')
        else:
            new_lines.append(line)
    else:
        new_lines.append(line)

with open(file_path, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print("Processing complete.")
