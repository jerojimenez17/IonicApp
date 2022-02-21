import Product from "../Product";
export default function  Taladro():Product[]{

    let obj = {
        table:[]
    };
    const xslx = require('xlsx');
    const filePath = process.argv.slice(2)[0];
    const workbook = xslx.readFile(filePath);
    
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    
    let posts:Product[] = [];
    let post:Product = {};
    
    for (let cell in sheet) {
        const cellAsString = cell.toString();
        if (cellAsString !== "f" && cellAsString !== "g" && cellAsString[1] > "1") {
            switch (cellAsString[0]) {
                case 'A': post.cod = sheet[cell].v;
                    break;
                case 'B': post.description = sheet[cell].v;
                    break;
                case 'C': post.brand = sheet[cell].v;
                    break;
                case 'D': post.iva = sheet[cell].v;
                    break;
                case 'E':
                    post.price = sheet[cell].v;
                    posts.push(post);
                    post = {};
                    break;
                default:
                    break;
            }
        }
    }
   return posts;
}