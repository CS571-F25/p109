export default function TitleSubDesc(props) {
    return (
        <div>
            <div className="textSpacing">
                <h2 style={{color:"#f2bfbfff"}}>{props.title}</h2>
                {props.subtitle && <p style={{color:"#999292ff"}}><em>{props.subtitle}</em></p>}
            </div>
            <div className="textSpacing">
                <p style={{color:"#999292ff"}}>{props.description}</p>
            </div>
        </div>
    );
}