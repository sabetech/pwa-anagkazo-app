import { EventHandler } from "react";

type ValueCardProps = {
    title: string,
    value: number,
    handleClick: EventHandler<any>
}

export const ValueCard: React.FC<ValueCardProps> = ({title, value, handleClick }) => <div style={{
    backgroundColor: 'white',
    width: '20vh',
    height: '20vh',
    borderRadius: 25,
    marginLeft: 10,
    marginTop: 50,
    boxShadow: '2px 2px 14px 0px rgba(0,0,0,0.25)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
}}
    onClick={handleClick}
>
    <p style={{
        fontSize: 82,
        fontWeight: 700,
        margin: -10,
    }}>
        { value }
    </p>
    <div style={{
        textAlign: 'center',
        fontSize: 14,
        margin: 5
    }}>
        { title }
    </div>
</div>;