import React from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck,
 CardSubtitle, CardBody } from 'reactstrap';

const ParkCards = (props) => {
  
  return (
    <div className=" col-md-offset-3">
    <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/alamo.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Alamo Square</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Alamo+Square+Park/@37.7763736,-122.4370077,17z/data=!3m1!4b1!4m5!3m4!1s0x808580a5506817e5:0x974b45672412fa15!8m2!3d37.7763694!4d-122.434819"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/alta.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Alta Plaza</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94115</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Alta+Plaza+Park/@37.7911459,-122.4398128,17z/data=!3m1!4b1!4m5!3m4!1s0x808580cf24842f9d:0xffb0154102337e61!8m2!3d37.7911417!4d-122.4376241"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/bernal.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Bernal Heights Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94110</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Bernal+Heights+Park/@37.7433458,-122.4161812,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e5a8d77c955:0x6005f1a5fe870695!8m2!3d37.7433416!4d-122.4139925"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>

        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/billy.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Billy Goat Hill Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94131</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Billy+Goat+Hill/@37.7414962,-122.4351693,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e6fae11f129:0x4d80767c0852cc39!8m2!3d37.741492!4d-122.4329806"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/buena.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Buena Vista Park</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Buena+Vista+Park/@37.7684088,-122.4436032,17z/data=!3m1!4b1!4m5!3m4!1s0x808580abd7efe773:0x7c605166dd4bdc40!8m2!3d37.7684046!4d-122.4414145"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/corona.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Corona Heights Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94114</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/search/?api=1&amp;query=Corona+Heights+Park&amp;query_place_id=ChIJX3DWQgJ-j4ARxWqSTDOy_CU" class="p-button" target="_blank"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
<CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/crissy.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Crissy Field</CardTitle>
          <CardSubtitle>Open Space</CardSubtitle>
          <CardText >94129</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Crissy+Field/@37.8040299,-122.4672052,17z/data=!3m1!4b1!4m5!3m4!1s0x808586dc8525b355:0x5b15912201aa3600!8m2!3d37.8040257!4d-122.4650165"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/dolores.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dolores Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94114</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Mission+Dolores+Park/@37.759621,-122.4290925,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e1779aa70a7:0xa618e4eff1228d60!8m2!3d37.7596168!4d-122.4269038"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/duboce.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Duboce Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Duboce+Park,+San+Francisco,+CA+94117/@37.7698534,-122.4344705,18z/data=!3m1!4b1!4m5!3m4!1s0x808580a7a67a788f:0x9650249a9c46dc70!8m2!3d37.769551!4d-122.433214"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/esprit.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Esprit Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94107</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Esprit+Park/@37.7610386,-122.3931639,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7fb7eef14eb5:0x915f858db66d7668!8m2!3d37.7610344!4d-122.3909752"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/glen.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Glen Canyon Park</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94127</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Glen+Canyon+Park/@37.741563,-122.4453738,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e76764229f5:0x8f353da71333a1f3!8m2!3d37.7415588!4d-122.4431851"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/grand.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Grand View Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94112</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Grandview+Park/@37.7564126,-122.4739283,17z/data=!3m1!4b1!4m5!3m4!1s0x808587602e7a2d15:0x6957dbab1942eef7!8m2!3d37.7564084!4d-122.4717396"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/great.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Great Meadow Park (Fort Mason)</CardTitle>
          <CardSubtitle>Open Space</CardSubtitle>
          <CardText >94123</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Great+Meadow+Park+at+Fort+Mason/@37.8047748,-122.4325892,17z/data=!3m1!4b1!4m5!3m4!1s0x808580d8d0b1e02b:0x5f831b973bd34679!8m2!3d37.8047706!4d-122.4304005"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/herons.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Heron’s Head Park</CardTitle>
          <CardSubtitle>Eco Park</CardSubtitle>
          <CardText >94124</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Heron's+Head+Park/@37.8047748,-122.4325892,17z/data=!4m5!3m4!1s0x808f7f6e1d97876b:0x746514cdd95491a7!8m2!3d37.7382002!4d-122.3731081"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/huntington.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Huntington Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94108</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Huntington+Park/@37.7921856,-122.4143624,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808d679987cd:0x4e30644c4c64fced!8m2!3d37.7921814!4d-122.4121737"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/interior.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Interior Greenbelt</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Interior+Greenbelt/@37.7601464,-122.4556357,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7df8ed7f268b:0xcdba978abe569d58!8m2!3d37.7601422!4d-122.453447"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/john.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>John McLaren Park</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94134</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/John+McLaren+Park/@37.7192916,-122.4205042,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7eee9fa0bfeb:0xd5653ca14ef32873!8m2!3d37.719309!4d-122.4193742"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/lafayette.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Lafayette Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94109</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Lafayette+Park/@37.7916188,-122.429802,17z/data=!3m1!4b1!4m5!3m4!1s0x808580c11ab4730b:0xc33e31debab892e0!8m2!3d37.7916146!4d-122.4276133"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/lake.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Lake Merced Park</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94132</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Lake+Merced+Park/@37.7226766,-122.4970271,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7d07c1ee4ec3:0x7ebc5e22e7f05496!8m2!3d37.7226724!4d-122.4948384"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/lands.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Land's End</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94121</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Lands+End+Lookout/@37.7822969,-122.5117379,17z/data=!4m8!1m2!2m1!1sLand's+End+Lookout!3m4!1s0x808587b2b311deb9:0x30b2509be3ee7e65!8m2!3d37.7848836!4d-122.50751"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/levis.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Levi's Plaza Park</CardTitle>
          <CardSubtitle>Mini Park</CardSubtitle>
          <CardText >94111</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/@37.8022149,-122.4037014,17z"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/lincoln.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Lincoln Park</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94133</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Pioneer+Park/@37.8028617,-122.4081774,17z/data=!3m1!4b1!4m5!3m4!1s0x808580f7217dce23:0x548a37271ccb4d43!8m2!3d37.8028575!4d-122.4059887"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/mckinley.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>McKinley Square</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94107</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/McKinley+Square/@37.758991,-122.4066171,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e35a2349075:0xefc879db56f6fbdd!8m2!3d37.7589868!4d-122.4044284"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/mission.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mission Creek Park</CardTitle>
          <CardSubtitle>Open Space</CardSubtitle>
          <CardText >94158</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Mission+Creek+Park/@37.7720086,-122.3984403,17z/data=!4m8!1m2!2m1!1sMission+Creek+Park!3m4!1s0x808f7fd187472bd5:0x45dff7f92ca04f02!8m2!3d37.7708696!4d-122.3988211"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/mount.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mount Davidson</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94127</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Mt+Davidson/@37.7383494,-122.4620881,15z/data=!3m1!4b1!4m5!3m4!1s0x808f7ddc0e44629f:0xa62ad60479d61bfb!8m2!3d37.7383333!4d-122.4533333"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/mountsutro.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Mount Sutro Open Space Reserve</CardTitle>
          <CardSubtitle>Open Space</CardSubtitle>
          <CardText >94131</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Mount+Sutro+Open+Space+Reserve/@37.7592243,-122.4594191,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7df848f03c0d:0xcda95817c2a4021a!8m2!3d37.7592201!4d-122.4572304"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/panhandle.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>The Panhandle</CardTitle>
          <CardSubtitle>Park</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/The+Panhandle/@37.7720591,-122.4501577,16z/data=!4m13!1m7!3m6!1s0x808580ad405811bb:0xd20d8aeb51b46264!2sPanhandle,+San+Francisco,+CA+94117!3b1!8m2!3d37.7728515!4d-122.4460161!3m4!1s0x80858752b0741a13:0x460f9fcad631e026!8m2!3d37.7724384!4d-122.4462855"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/patricias.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Patricia’s Green</CardTitle>
          <CardSubtitle>Mini Park</CardSubtitle>
          <CardText >94102</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Patricia%E2%80%99s+Green+In+Hayes+Valley/@37.776245,-122.4266145,17z/data=!3m1!4b1!4m5!3m4!1s0x808580a2095575d9:0xbc85b6412cf68b83!8m2!3d37.7762408!4d-122.4244258"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/pioneer.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Pioneer Park</CardTitle>
          <CardSubtitle>Park</CardSubtitle>
          <CardText >94133</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Pioneer+Park/@37.8028617,-122.4081774,17z/data=!3m1!4b1!4m5!3m4!1s0x808580f7217dce23:0x548a37271ccb4d43!8m2!3d37.8028575!4d-122.4059887"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/precita.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Precita Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94110</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Precita+Park/@37.7470647,-122.414405,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7e4f929ca987:0x396e21c371940436!8m2!3d37.7470605!4d-122.4122163"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/rincon.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Rincon Park</CardTitle>
          <CardSubtitle>Mini Park</CardSubtitle>
          <CardText >94105</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Rincon+Park/@37.7915717,-122.3921311,17z/data=!3m1!4b1!4m5!3m4!1s0x8085806ffb969c91:0xc41ceaed49162ccc!8m2!3d37.7915675!4d-122.3899424"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/sue.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sue Bierman Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Sue+Bierman+Park/@37.7961213,-122.3982047,17z/data=!3m1!4b1!4m5!3m4!1s0x8085874df654d825:0x7f7dac195e75af8a!8m2!3d37.7961171!4d-122.396016"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/sutro.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Sutro Heights Park</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText > 94121</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Sutro+Heights+Park/@37.7777984,-122.5132962,17z/data=!3m1!4b1!4m5!3m4!1s0x808587b42ebc4ef9:0x5e73c1ad9c8a015a!8m2!3d37.7777942!4d-122.5111075"  class="p-button" target="_blank">See in Maps</a></Button>
            <Button className="heart"><i className="far fa-heart"></i></Button>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/tank.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Tank Hill</CardTitle>
          <CardSubtitle>Neighborhood Park</CardSubtitle>
          <CardText >94114</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Tank+Hill/@37.7599352,-122.4499031,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7dfe17c93019:0xc2fd87b9738fb652!8m2!3d37.759931!4d-122.4477144"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/transamerica.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Transamerica Redwood Park</CardTitle>
          <CardSubtitle>Mini Park</CardSubtitle>
          <CardText >94111</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Transamerica+Redwood+Park/@37.7951587,-122.4023695,21z/data=!4m12!1m6!3m5!1s0x8085808a97c37061:0x3a4bec56641a1979!2sTransamerica+Redwood+Park!8m2!3d37.7951817!4d-122.4022158!3m4!1s0x8085808a97c37061:0x3a4bec56641a1979!8m2!3d37.7951817!4d-122.4022158"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/twin.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Twin Peaks</CardTitle>
          <CardSubtitle>Regional Park</CardSubtitle>
          <CardText >94114</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Twin+Peaks/@37.752514,-122.449757,17z/data=!3m1!4b1!4m5!3m4!1s0x808f7de2acf071b7:0xb2cfa1c901ae6e6d!8m2!3d37.7525098!4d-122.4475683"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/union.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Union Square Park</CardTitle>
          <CardSubtitle>Square</CardSubtitle>
          <CardText >94108</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/search/Union+Square+Park/@37.7881421,-122.4082963,18z/data=!3m1!4b1"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/washington.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Washington Square Park</CardTitle>
          <CardSubtitle>Square</CardSubtitle>
          <CardText > 94133</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Washington+Square/@37.8008515,-122.4121678,17z/data=!3m1!4b1!4m5!3m4!1s0x808580f1a98e88a1:0x24c815888a8a9ff0!8m2!3d37.8008473!4d-122.4099791"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/yerba.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Yerba Buena Gardens</CardTitle>
          <CardSubtitle>Park</CardSubtitle>
          <CardText >94103</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Yerba+Buena+Gardens/@37.7850195,-122.4045351,17z/data=!3m1!4b1!4m5!3m4!1s0x808580879c034b09:0x9426c73a3d692058!8m2!3d37.7850153!4d-122.4023464"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <h3>Golden Gate Parks</h3>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/conservatory.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Conservatory of Flowers</CardTitle>
          <CardSubtitle>in Regional Park</CardSubtitle>
          <CardText > 94118</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Conservatory+of+Flowers/@37.7726189,-122.462417,17z/data=!3m1!4b1!4m5!3m4!1s0x808587459ac2a6e5:0x4cfc5cb588e07c1f!8m2!3d37.7726147!4d-122.4602283"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/dahlia.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Dahlia Garden</CardTitle>
          <CardSubtitle>Garden</CardSubtitle>
          <CardText > 94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Dahlia+Garden/@37.772567,-122.4608297,17.94z/data=!4m12!1m6!3m5!1s0x808587457a0f4d85:0x684aceeb8dcaeeea!2sDahlia+Garden!8m2!3d37.7725201!4d-122.4592788!3m4!1s0x808587457a0f4d85:0x684aceeb8dcaeeea!8m2!3d37.7725201!4d-122.4592788"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/hippie.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Hippie Hill</CardTitle>
          <CardSubtitle>Open Space</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Hippie+Hill/@37.7702865,-122.4588132,17.98z/data=!4m13!1m7!3m6!1s0x808587500069d877:0x50382a122acd3deb!2sHippie+Hill!3b1!8m2!3d37.7699176!4d-122.4578869!3m4!1s0x808587500420634f:0x5040b08b01fed94c!8m2!3d37.7699202!4d-122.4578827"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/japanese.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Japanese Tea Garden</CardTitle>
          <CardSubtitle>Garden</CardSubtitle>
          <CardText >94118</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Japanese+Tea+Garden/@37.7700956,-122.4726247,17z/data=!3m1!4b1!4m5!3m4!1s0x8085808fb9e85b85:0xbfb29b164018aab7!8m2!3d37.7700914!4d-122.470436"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/lily.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Lily Pond</CardTitle>
          <CardSubtitle>in Regional Park</CardSubtitle>
          <CardText >94118</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Lily+Pond/@37.7710526,-122.4644731,17.28z/data=!4m5!3m4!1s0x80858744f750c643:0x14328dea18df1ca4!8m2!3d37.770761!4d-122.4616293"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/peacock.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Peacock Meadow</CardTitle>
          <CardSubtitle>Open Space</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Peacock+Meadow/@37.7715752,-122.4598417,17z/data=!3m1!4b1!4m5!3m4!1s0x8085874f8f379481:0xae36de55d042671c!8m2!3d37.771571!4d-122.457653"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/queen.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Queen Wilhelmina Tulip Garden</CardTitle>
          <CardSubtitle>Garden</CardSubtitle>
          <CardText >94121</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Queen+Wilhelmina+Tulip+Garden/@37.7701474,-122.5114586,17z/data=!3m1!4b1!4m5!3m4!1s0x808587b97c4ad097:0xf1ce4042d68b2b5!8m2!3d37.7701432!4d-122.5092699"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/robin.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Robin Williams Meadow</CardTitle>
          <CardSubtitle>Open Space</CardSubtitle>
          <CardText >94118</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Robin+Williams+Meadow/@37.7702865,-122.4588132,17.98z/data=!4m13!1m7!3m6!1s0x808587500069d877:0x50382a122acd3deb!2sHippie+Hill!3b1!8m2!3d37.7699176!4d-122.4578869!3m4!1s0x80858750059b5339:0xa674f99d6078511!8m2!3d37.7691071!4d-122.4580175"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/rose.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Rose Garden</CardTitle>
          <CardSubtitle>Garden</CardSubtitle>
          <CardText >94117</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Rose+Garden/@37.7700956,-122.4726247,17z/data=!4m12!1m6!3m5!1s0x8085808fb9e85b85:0xbfb29b164018aab7!2sJapanese+Tea+Garden!8m2!3d37.7700914!4d-122.470436!3m4!1s0x8085876a57c1c3df:0xf36ba6d806d9db40!8m2!3d37.7717091!4d-122.4716847"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
        <CardDeck>
      <Card>
        <CardImg top width="100%" src="./images/botanical.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>San Francisco Botanical Garden</CardTitle>
          <CardSubtitle>Garden</CardSubtitle>
          <CardText >94122</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/San+Francisco+Botanical+Garden/@37.7669703,-122.4688912,17z/data=!3m1!4b1!4m5!3m4!1s0x8085876857369c5b:0xe894109bfda58342!8m2!3d37.7669661!4d-122.4667025"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/shakespear.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Shakespeare Garden</CardTitle>
          <CardSubtitle>Garden</CardSubtitle>
          <CardText >94118</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Shakespeare+Garden/@37.7700956,-122.4726247,17z/data=!4m12!1m6!3m5!1s0x8085808fb9e85b85:0xbfb29b164018aab7!2sJapanese+Tea+Garden!8m2!3d37.7700914!4d-122.470436!3m4!1s0x80858773d79da5ef:0xa59b7fbf635abaa2!8m2!3d37.7688956!4d-122.4672329"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardImg top width="100%" src="./images/stow.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle>Stow Lake</CardTitle>
          <CardSubtitle>in Regional Park</CardSubtitle>
          <CardText >94118</CardText>
          <CardText ></CardText>
          <div className="cardFooter">
            <Button><a href="https://www.google.com/maps/place/Stow+Lake/@37.7690694,-122.4754678,17z/data=!4m12!1m6!3m5!1s0x8085808fb9e85b85:0xbfb29b164018aab7!2sJapanese+Tea+Garden!8m2!3d37.7700914!4d-122.470436!3m4!1s0x8085874e30b1a3fd:0x4074f54338931661!8m2!3d37.7698311!4d-122.4767165"  class="p-button" target="_blank">See in Maps</a></Button>
            <i className="far fa-heart"></i>
          </div>
        </CardBody>
      </Card>
        </CardDeck>
        <br></br>
    </div> 
    
  );
};

export default ParkCards;