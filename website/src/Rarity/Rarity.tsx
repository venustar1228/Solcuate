
import './Rarity.css'

function Rarity() {
    return (
        <div className="rarity-section" id='rarity'>
            <div className="team-columns-section wf-section">
                <div className="centered-container">
                    <h2 className="team-heading">Rarity Rank</h2>
                    <div className="team-block"><img src="images/common.png" loading="lazy" alt="" className="team-image" />
                        <div className="team-content">
                            <h3 className="member-name">COMMON</h3>
                            <p className="team-paragraph">The common cat<br></br></p>
                        </div>
                    </div>
                    <div className="team-block"><img src="images/uncommon.jpg" loading="lazy" alt="" className="team-image" />
                        <div className="team-content">
                            <h3 className="member-name">UNCOMMON</h3>
                            <p className="team-paragraph">The rarest cat<br></br></p>
                        </div>
                    </div>
                    <div className="team-block"><img src="images/legendary.jpeg" loading="lazy" alt="" className="team-image" />
                        <div className="team-content">
                            <h3 className="member-name">LEGENDARY</h3>
                            <p className="team-paragraph">The legendary cat<br></br></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rarity;
