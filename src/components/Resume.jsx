import { Card } from "react-bootstrap";

export default function Resume(props) {
    return <div>
        {
            props.resumeList.map((resumeItem) => <Card className="textSpacing">
                <h3 style={{color:"#f2bfbfff"}}>{resumeItem.title}</h3>
                {resumeItem.subtitle && <p style={{color:"#999292ff"}}><em>{resumeItem.subtitle}</em></p>}
                <p style={{color:"#999292ff"}}>{resumeItem.description}</p>
            </Card>)
        }
    </div>
}