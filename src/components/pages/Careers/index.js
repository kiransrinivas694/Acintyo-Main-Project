import "./index.css";
const roles = [
    {
        role: "Designers",
        duty: "Coming Soon...",
    },
    {
        role: "Tech",
        duty: "Coming Soon...",
    },
    {
        role: "Human resources",
        duty: "Coming Soon...",
    },
    {
        role: "Executives",
        duty: "Coming Soon...",
    },
    {
        role: "Content Writer",
        duty: "Coming Soon...",
    },
    {
        role: "Management",
        duty: "Coming Soon...",
    },
];
function Careers() {
    return (
        <div className="career-container">
            <h2>Coming Soon...</h2>
            <hr />
            <div className="roles-container">
                {roles.map((eachRole) => (
                    <div className="each-role">
                        <div className="role-card">
                            <h3>{eachRole.duty}</h3>
                        </div>
                        <p className="role">
                            <span>Acintyo, </span>
                            {eachRole.role}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Careers;
