#!/bin/bash

# Base directory
BASE_DIR="/Users/phanjapon/Documents/Coding/Motion/the-nanas-lab/app/(routes)"

routes=("gestures" "keyframes" "motion-value" "staggers" "transformations" "transitions" "variants" "while-in-view")

for route in "${routes[@]}"; do
    echo "Processing route: $route"
    route_dir="$BASE_DIR/$route"
    
    if [ ! -d "$route_dir" ]; then
        echo "Directory $route_dir not found, skipping..."
        continue
    fi
    
    # Find all practice-N directories
    for practice_dir in "$route_dir"/practice-*; do
        if [ ! -d "$practice_dir" ]; then continue; fi
        
        # Get the number N
        n=$(basename "$practice_dir" | sed 's/practice-//')
        lab_dir="$route_dir/lab-$n"
        
        echo "  Renaming $practice_dir to $lab_dir"
        mv "$practice_dir" "$lab_dir"
        
        # Inside the new lab-N directory
        # Rename PracticeN.tsx to LabN.tsx
        old_file="$lab_dir/Practice$n.tsx"
        new_file="$lab_dir/Lab$n.tsx"
        
        if [ -f "$old_file" ]; then
            echo "    Renaming $old_file to $new_file"
            mv "$old_file" "$new_file"
            
            # Update component name and references in LabN.tsx
            sed -i '' "s/Practice$n/Lab$n/g" "$new_file"
        fi
        
        # Update page.tsx
        page_file="$lab_dir/page.tsx"
        if [ -f "$page_file" ]; then
            echo "    Updating $page_file"
            sed -i '' "s/Practice$n/Lab$n/g" "$page_file"
            # Update metadata title if needed
            sed -i '' "s/Practice $n/Lab $n/g" "$page_file"
        fi
    done
done

# Finally update navigation.ts
nav_file="/Users/phanjapon/Documents/Coding/Motion/the-nanas-lab/config/navigation.ts"
if [ -f "$nav_file" ]; then
    echo "Updating $nav_file"
    sed -i '' 's/practice-/lab-/g' "$nav_file"
fi

echo "Done!"
