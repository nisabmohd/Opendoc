import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function Code({ codeString }: { codeString: any }) {
    return (
        <SyntaxHighlighter language="javascript" style={dark}>
            {codeString}
        </SyntaxHighlighter>
    )
};
