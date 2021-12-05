import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";
import i1 from "./assets/images/cars.gif";
import newbanner from "./assets/images/text.png"
import "./style.css";
import "./newthing.js";

export const StyledButton = styled.button`
  padding: 10px;
  border-radius: 50px;
  border: none;
  background-color: #ffffff;
  padding: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-weight: bold;
  font-size: 40px;
  color: #000000;
  cursor: pointer;
  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);
  :active {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    color: #white;
  }
  :hover {
    transition-duration: .4s;
    color: black;
    background-color: #37F713;
  }
`;

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledImg = styled.img`
  width: 200px;
  height: 200px;
  @media (min-width: 767px) {
    width: 350px;
    height: 350px;
  }
  transition: width 0.5s;
  transition: height 0.5s;
`;

function App() {
  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [feedback, setFeedback] = useState("");
  const [claimingNft, setClaimingNft] = useState(false);
  const claimNFTs = (_amount) => {
    _amount = document.getElementById("inputBox").value;
    if (_amount <= 0) {
      return;
    }
    setFeedback("Minting your Official CryptoBugPunk(s)...");
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(blockchain.account, _amount)
      // ********
      // You can change the line above to
      // .whiteListMint(blockchain.account, _amount) if you want only whitelisted
      // users to be able to mint through your website!
      // And after you're done with whitelisted users buying from your website,
      // You can switch it back to .mint(blockchain.account, _amount).
      // ********
      .send({
        gasLimit: 285000 * _amount,
        to: "0x2DA739FfE08BE9d872Da2557a8b9cD0483a87125", // the address of your contract
        from: blockchain.account,
        value: blockchain.web3.utils.toWei((0.04 * _amount).toString(), "ether"),
      })
      .once("error", (err) => {
        console.log(err);
        setFeedback("Sorry, something went wrong. Check your transaction on Etherscan to find out what happened!");
        setClaimingNft(false);
      })
      .then((receipt) => {
        setFeedback(
          "Your CryptoBugPunk(s) successfully minted!"
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      dispatch(fetchData(blockchain.account));
    }
  };

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  function onLinkClick() {
    document.getElementById("Minter").scrollIntoView();
  }

  function onRoadClick() {
    document.getElementById("Roadmap").scrollIntoView();
  }


  return (
    <s.Screen style={{ backgroundColor: "var(--black)", fontSize: 40 }}>
      <s.Container className="bigContainer" flex={1} ai={"center"} style={{ padding: 24 }}>
        <s.TextTitle
          style={{
            display: "flex", flexDirection: "row", textAlign: "left", fontSize: 12, fontWeight: "bold", paddingRight: 10, margin: 0,
            borderStyle: "solid", borderColor: "black", borderWidth: 0,
            borderRadius: 50, textAlign: "center", justifySelf: "center", justifyContent: "center"
          }}
        >
          <a className="logoHolder" href="#google">
            <img alt={"BooCrew Logo"}
              src={newbanner}
              className="logo"
            ></img></a>
        </s.TextTitle>
        <div 
        className="menubar"
        style={{
          // marginTop: 40,
          // fontSize: 20,
          color: "blue",
          // backgroundColor: "black",
          padding: 20,
          borderRadius: 0,
          borderColor: "white",
          // borderWidth: 5,
          borderStyle: "solid",
          // boxShadow: "0px 0px 10px white"
        }}>
          <a onClick={onLinkClick}>Minter</a> | <a onClick={onRoadClick}>Roadmap</a> | <a href="https://opensea.io/collection/cryptobugpunks" target="_blank" rel="noopener noreferrer"> OpenSea</a> | <a href="https://twitter.com/cryptobugpunks" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <s.SpacerMedium />
        <s.Container
        className="topdesc"
          flex={1}
          jc={"center"}
          ai={"center"}
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 44,
            paddingTop: 24,
            // fontSize: 30,
            maxWidth: 1500,
            borderRadius: 100,
            borderColor: "white",
            borderWidth: 5,
            borderStyle: "solid",
            boxShadow: "0px 0px 10px white",
            textAlign: "center",
            marginBottom: 20
          }}
        >
          <text className="rainbow" style={{ fontSize: 30 }}></text>
          CryptoBugPunks is a collection of 10,000 unique NFTs— unique digital collectibles living on the Ethereum blockchain. <br/>
          <s.SpacerMedium/>
          Total Supply: 10,000. <br/>Every single CryptoBugPunk is 1/1.<br/>
          <s.SpacerMedium/>
          The CryptoBug Punks are waiting to park up in your garage. <br/>
          <s.SpacerMedium/>
          Let`s see how far around the world they can reach!
          <br/>
          <s.SpacerMedium/>
          Countdown to launch:<s.SpacerXSmall/>
          <img src="https://gen.sendtric.com/countdown/rpozymsnsv" />
        </s.Container>
        <ResponsiveWrapper flex={1} style={{ padding: 24, paddingTop: 0 }}>
          <s.Container flex={1} jc={"center"} ai={"center"} style={{ paddingTop: 0, flexDirection: "column" }}>
            <s.TextTitle
              style={{
                textAlign: "center",
                fontSize: 30,
                fontWeight: "bold",
                borderStyle: "solid",
                borderColor: "black",
                color: "white",
                backgroundColor: "black",
                padding: 20,
                borderRadius: 100,
                borderColor: "white",
                borderWidth: 5,
                borderStyle: "solid",
                boxShadow: "0px 0px 10px white",
                marginBottom: 20,
              }}>
              0.04 ETH + Gas
            </s.TextTitle>
            <StyledImg alt={"BooCrew Hidden"} src={i1} style={{
              paddingTop: 0,
              borderStyle: "solid",
              borderColor: "white",
              boxShadow: "0px 0px 30px white",
              borderWidth: 5,
              borderRadius: 0,
              width: 600,
              height: 295

            }} />
            <s.TextTitle
              style={{
                textAlign: "center", fontSize: 40, fontWeight: "bold", borderStyle: "solid", borderColor: "black",
                borderWidth: 0,
                paddingLeft: 100,
                paddingRight: 100,
                borderRadius: 0,
                marginTop: 20,
                marginBottom: 20,
                backgroundColor: "black",
                padding: 20,
                color: "white",
                borderRadius: 100,
                borderColor: "white",
                borderWidth: 5,
                borderStyle: "solid",
                boxShadow: "0px 0px 10px white"
              }}
            >
              {blockchain.account == null ? "????" : (data.totalSupply)}/10000
            </s.TextTitle>
            {/* <s.SpacerMedium/> */}
            {/* Beginning of minting button box */}
            <s.Container
              flex={1}
              jc={"center"}
              ai={"center"}
              id="Minter"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 50,
                borderStyle: "solid",
                borderColor: "black",
                borderWidth: 0,
                borderRadius: 30,
                fontSize: 40,
                maxWidth: 1500,
                borderRadius: 100,
                borderColor: "white",
                borderWidth: 5,
                borderStyle: "solid",
                boxShadow: "0px 0px 10px white"
              }}
            >
              {Number(data.totalSupply) == 5555 ? (
                <>
                  <s.TextTitle style={{ textAlign: "center" }}>
                    The sale has ended.
                  </s.TextTitle>
                  <s.SpacerSmall />
                  <s.TextDescription style={{ textAlign: "center" }}>
                    Dont worry, you're not missing out! You can still get CryptoBugPunks on{" "}
                    <a
                      // target={"_blank"}
                      href={"https://testnets.opensea.io/collection/rinkeby-doodlenauts"}
                    >
                      Opensea.io
                    </a>
                  </s.TextDescription>
                </>
              ) : (
                <>
                  {/* <s.TextTitle style={{ textAlign: "center", fontSize: 30 }}>
                  1 DOODL costs .01 ETH.
                </s.TextTitle>
                <s.SpacerXSmall />
                <s.TextDescription style={{ textAlign: "center", fontSize: 30 }}>
                  Excluding gas fees.
                </s.TextDescription>
                <s.SpacerSmall /> */}
                  <s.TextDescription style={{ textAlign: "center", fontSize: 30 }}>
                    {feedback}
                  </s.TextDescription>
                  <s.SpacerMedium />
                  {blockchain.account === "" ||
                    blockchain.smartContract === null ? (
                    <s.Container ai={"center"} jc={"center"}>
                      <s.TextDescription style={{ textAlign: "center", fontSize: 30, marginBottom: 0, color: "white" }}>
                        Connect to the CryptoBugPunks Minter!
                      </s.TextDescription>
                      <s.SpacerSmall />
                      <StyledButton

                        style={{ fontFamily: "coder" }}
                        onClick={(e) => {
                          // COMMENT THIS STUFF OUT WHEN  YOU ARE READY TO LAUNCH!
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                      >
                        CONNECT
                      </StyledButton>
                      {/* <s.SpacerLarge /> */}
                      {/* <s.TextDescription style={{textAlign: "center", fontSize: 30, marginBottom: 0, paddingBottom: 0}}>
                      <a href="https://google.com">Boo Crew NFT Smart Contract</a>
                    </s.TextDescription> */}
                      {blockchain.errorMsg !== "" ? (
                        <>
                          <s.SpacerSmall />
                          <s.TextDescription style={{ textAlign: "center", fontSize: 50 }}>
                            {blockchain.errorMsg}
                          </s.TextDescription>
                        </>
                      ) : null}
                    </s.Container>
                  ) : (
                    <s.Container ai={"center"} jc={"center"} fd={"row"} style={{ marginTop: 0, paddingTop: 0 }}>
                      <form>
                        I want
                        <div style={{
                          backgroundColor: "grey",
                          borderWidth: 5,
                          borderColor: "black",
                          borderStyle: "solid",
                          borderRadius: 40,
                          textAlign: "center"
                        }}>
                          <input
                            id="inputBox"
                            placeholder="#"
                            type="number"
                            min="1"
                            max="10"
                            style={{
                              fontSize: 40,
                              textAlign: "center",
                              backgroundColor: "grey",
                              // borderRadius: 40,
                              // paddingRight: -10,
                              // marginBottom: 20,
                              // paddingLeft: 0,
                              // marginLeft: 0,
                              maxWidth: 200,
                              borderWidth: 0,
                              fontFamily: "coder",
                              color: "white"
                            }}
                          />
                        </div>
                        CBPs
                      </form>
                      <s.SpacerSmall />
                      <StyledButton
                        style={{ fontFamily: "coder" }}
                        disabled={claimingNft ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimNFTs(1);
                          getData();
                        }}
                      >
                        {claimingNft ? "BUSY" : "MINT"}
                      </StyledButton>
                    </s.Container>
                  )}
                </>
              )}
            </s.Container>
            {/* All done! */}
            <s.SpacerLarge />
            <s.Container
              flex={1}
              jc={"center"}
              ai={"center"}
              id="Roadmap"
              className="fullmap"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 24,
                paddingTop: 24,
                // fontSize: 40,
                maxWidth: 1500,
                borderRadius: 100,
                borderColor: "white",
                borderWidth: 5,
                borderStyle: "solid",
                boxShadow: "0px 0px 10px white",
                textAlign: "center"
              }}
            >
              <text className="rainbow roadmap">Roadmap</text>
              <br></br>
              <s.SpacerMedium />
              <s.SpacerMedium />
              <text style={{ textAlign: "left", paddingLeft: 40 }}>
                <text className="rainbow roadmap">25% </text>
                <br></br>
                <s.SpacerSmall />
                - 10 NFT Giveaway and 5 x $1000 ETH Giveaway
                <br />
                <s.SpacerMedium />
                <s.SpacerSmall />
                <text className="rainbow roadmap">50% </text>
                <br></br>
                <s.SpacerSmall />
                - 5% to Community Selected Charities and Rarity Ranking
                <br/>
                <s.SpacerMedium />
                <s.SpacerSmall />
                <text className="rainbow roadmap">75% </text>
                <br></br>
                <s.SpacerSmall />
                - Buy plot of land in the Metaverse to build a CryptoBugPunk garage where the community
                can show their art and hang out and 5% to Community Selected Animal Shelters
                <br />
                <s.SpacerMedium />
                <s.SpacerSmall />
                <text className="rainbow roadmap">100% </text>
                <br></br>
                <s.SpacerSmall />
                - 10 x $1000 ETH Giveaway. Continued growth of project, and additional collections released.
                <br />
                <s.SpacerMedium />
                <s.SpacerSmall />
                <s.SpacerMedium />
                <s.SpacerSmall />

              </text>
            </s.Container>
            <s.SpacerLarge />
            <s.Container
              flex={1}
              jc={"center"}
              ai={"center"}
              id="Roadmap"
              className="fullmape"
              style={{
                backgroundColor: "black",
                color: "white",
                padding: 24,
                paddingTop: 24,
                // fontSize: 40,
                maxWidth: 1500,
                borderRadius: 100,
                borderColor: "white",
                borderWidth: 5,
                borderStyle: "solid",
                boxShadow: "0px 0px 10px white",
                textAlign: "center"
              }}
            >
              <text className="rainbow roadmap">FAQ</text>
              <br></br>
              <s.SpacerMedium />
              <s.SpacerMedium />
              <text style={{ textAlign: "left", paddingLeft: 40 }}>
                <text className="rainbow roadmape">What is the total supply? </text>
                <br></br>
                <s.SpacerSmall />
                A total of 10,000 unique CryptoBugPunk NFTs will be created.
                <br />
                <s.SpacerMedium />
                <s.SpacerSmall />
                <text className="rainbow roadmape">When is the launch? </text>
                <br></br>
                <s.SpacerSmall />
                The full launch is December 5th, 2021 @ 12:00PM EST.
                <br/>
                <s.SpacerMedium />
                <s.SpacerSmall />
                <text className="rainbow roadmape">How much does it cost to mint an NFT? </text>
                <br></br>
                <s.SpacerSmall />
                0.04 ETH + Gas.
                <br />
                <s.SpacerMedium />
                <s.SpacerSmall />
                <text className="rainbow roadmape">How can I mint an NFT? </text>
                <br></br>
                <s.SpacerSmall />
                CryptoBugPunks can be minted by connecting your wallet to the minter above and entering the amount you want to mint.
                <br />
                <s.SpacerMedium />
                <s.SpacerSmall />
                <s.SpacerMedium />
                <s.SpacerSmall />
                <s.SpacerMedium />
                <s.SpacerSmall />
              </text>
              Get them bugs started!!!
            </s.Container>

          </s.Container>

          {/* <s.SpacerMedium /> */}
        </ResponsiveWrapper>
        <s.SpacerSmall />
        <s.SpacerLarge />
        <s.SpacerLarge />
        <s.SpacerLarge />
        <s.Container jc={"center"} ai={"center"} style={{ width: "70%" }}>
          <s.TextDescription id="google" style={{ textAlign: "center", fontSize: 40 }}>
            <a
              href="https://etherscan.io/address/0x2DA739FfE08BE9d872Da2557a8b9cD0483a87125"
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: 20,
              }}
            >CryptoBugPunks Smart Contract</a>
          </s.TextDescription>
          <s.SpacerSmall />
          {/* <s.TextDescription style={{ textAlign: "center", fontSize: 9 }}>
          </s.TextDescription> */}
        </s.Container>
      </s.Container>
    </s.Screen>
  );
}

export default App;
