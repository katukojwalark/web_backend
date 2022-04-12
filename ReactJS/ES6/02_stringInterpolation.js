/* How to print the following on console?
l1t0
        l2t2
    l3t1
    l4t1
                l5t4
*/

// without string interpolation

let str = "l1t0\n\t\tl2t2\n\tl3t1\n\tl4t1\n\t\t\t\tl5t4"

console.log(str);

// Using string interpolation.  To retain the format I use `

let strIP = 
`l1t0
        l2t2
    l3t1
    l4t1
                l5t4`;

console.log(strIP);

// Custom Interpolation. Place Holders ${valtobeplaced}

// The following example shows how to use a common templete for with specific place holders.

let arrEmp = [
    { name: "Rajesh", currentCTC: "30LPA", curPos: "Full Stack Developer", revisedCTC: "38LPA", revisedPos: "Lead Full Stack Developer"},
    { name: "Ramesh", currentCTC: "30LPA", curPos: "Full Stack Developer", revisedCTC: "38LPA", revisedPos: "Lead Full Stack Developer"},
    { name: "Suresh", currentCTC: "38LPA", curPos: "Lead Full Stack Developer", revisedCTC: "42LPA", revisedPos: "Manager Full Stack Developer"},
    { name: "Venkat", currentCTC: "42LPA", curPos: "Manager Full Stack Developer", revisedCTC: "48LPA", revisedPos: "Associate Director Full Stack Developer"},
];

// Creating content for each employee
let manager = "Rajanikanth";
for (emp of arrEmp) {
    let strContent = 
    `Hello ${emp.name},
        Congratulations on your promotion from ${emp.curPos} to ${emp.revisedPos}.
        Your CTC is revised from ${emp.currentCTC} to ${emp.revisedCTC}.
    Regards,
    ${manager}`

    console.log(strContent);
}