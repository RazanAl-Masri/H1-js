function getElementWidth(content, padding, border) {
    // Parse numbers from strings (remove "px" and convert to numbers)
    const contentWidth = parseFloat(content);
    const paddingWidth = parseFloat(padding);
    const borderWidth = parseFloat(border);
    
    // Calculate total width assuming box-sizing is border-box
    const totalWidth = contentWidth + paddingWidth + borderWidth;
    
    // Return total width
    return totalWidth;
}

// Test cases
console.log(getElementWidth("50px", "8px", "4px")); // 62 (50 + 8 + 4 = 62)
console.log(getElementWidth("60px", "12px", "8.5px")); // 80.5 (60 + 12 + 8.5 = 80.5)
console.log(getElementWidth("200px", "0px", "0px")); // 200 (200 + 0 + 0 = 200)

