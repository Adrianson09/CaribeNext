import agentsTeam from "../../data/agents";
import Slider from "react-slick";
import Link from "next/link";

const Team = () => {
  const settings = {
    dots: true,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    draggable: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} arrows={true}>
        {agentsTeam.slice(0, 6).map((item) => (
          <div className="item" key={item.id}>
            <div className="team_member">
              <div className="thumb">
                <img className="img-fluid w100" src={item.img} alt="5.jpg" />
                <div className="overylay">
                  <ul className="social_icon">
                    {item.socialList.map((social, i) => (
                      <li className="list-inline-item" key={i}>
                        <Link
                          href={social.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={`fa ${social.icon}`}></i>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* End .thumb */}

              <div className="details">
                <h4>
                  {" "}
                  <Link href={`/agent-details/${item.id}`}>
                    {item.name}
                  </Link>
                </h4>
                <p>{item.type}</p>
              </div>
              {/* End .details */}
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Team;
