import fs from 'fs';
import Showdown from "showdown";

export default function Contribute() {
    const string = fs.readFileSync("./src/data/CONTRIBUTE.md", 'utf8')

    const converter = new Showdown.Converter({ tables: true });
    const text      = string;
    const html      = converter.makeHtml(text);
    
    return <div style={{margin: "auto", maxWidth: "1900px", padding:'2em 0'}} dangerouslySetInnerHTML={{ __html: html }} />
}