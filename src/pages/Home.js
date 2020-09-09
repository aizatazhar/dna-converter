import React, { Component } from "react";
import styled from "styled-components";
import Form from "react-bootstrap/Form";
import CopyToClipboard from "react-copy-to-clipboard";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Styles = styled.div`
  .input {
    background-image: linear-gradient(to right, #073C16, #0A5C22);
    color: #ffffff;
    padding-top: 100px;
    padding-bottom: 100px;
  }

  .form-group {
    flex-grow:1
  }

  .form-control {
    margin-right: 10px;
    border-radius: 10px;
    flex-grow:1
  }

  .customButton {
    margin-top: 10px;
    margin-bottom: 10px;
    background: #2C5F2D;
    color: #FFFFFF;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
  }

  .result {
    padding-top: 50px;
    padding-bottom: 20px;
    background-color: #EEEEEE
  }
`;

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aminoAcidTable: {
        UUU: ["F", "Phe", 147.06841], CUU: ["L", "Leu", 113.08406], AUU: ["I", "Ile", 113.08406], GUU: ["V", "Val", 99.068410],
        UUC: ["F", "Phe", 147.06841], CUC: ["L", "Leu", 113.08406], AUC: ["I", "Ile", 113.08406], GUC: ["V", "Val", 99.068410],
        UUA: ["L", "Leu", 113.08406], CUA: ["L", "Leu", 113.08406], AUA: ["I", "Ile", 113.08406], GUA: ["V", "Val", 99.068410],
        UUG: ["L", "Leu", 113.08406], CUG: ["L", "Leu", 113.08406], AUG: ["M", "Met", 131.04049], GUG: ["V", "Val", 99.068410],
        UCU: ["S", "Ser", 87.032030], CCU: ["P", "Pro", 97.052760], ACU: ["T", "Thr", 101.04768], GCU: ["A", "Ala", 71.037110],
        UCC: ["S", "Ser", 87.032030], CCC: ["P", "Pro", 97.052760], ACC: ["T", "Thr", 101.04768], GCC: ["A", "Ala", 71.037110],
        UCA: ["S", "Ser", 87.032030], CCA: ["P", "Pro", 97.052760], ACA: ["T", "Thr", 101.04768], GCA: ["A", "Ala", 71.037110],
        UCG: ["S", "Ser", 87.032030], CCG: ["P", "Pro", 97.052760], ACG: ["T", "Thr", 101.04768], GCG: ["A", "Ala", 71.037110],
        UAU: ["Y", "Tyr", 163.06333], CAU: ["H", "His", 137.05891], AAU: ["N", "Asn", 114.04293], GAU: ["D", "Asp", 115.02694],
        UAC: ["Y", "Tyr", 163.06333], CAC: ["H", "His", 137.05891], AAC: ["N", "Asn", 114.04293], GAC: ["D", "Asp", 115.02694],
        CAA: ["Q", "Gln", 128.05858], GGG: ["G", "Gly", 57.021460], AAA: ["K", "Lys", 128.09496], GAA: ["E", "Glu", 129.04259],
        AGG: ["R", "Arg", 156.10111], CAG: ["Q", "Gln", 128.05858], AAG: ["K", "Lys", 128.09496], GAG: ["E", "Glu", 129.04259],
        UGU: ["C", "Cys", 103.00919], CGU: ["R", "Arg", 156.10111], AGU: ["S", "Ser", 87.032030], GGU: ["G", "Gly", 57.021460],
        UGC: ["C", "Cys", 103.00919], CGC: ["R", "Arg", 156.10111], AGC: ["S", "Ser", 87.032030], GGC: ["G", "Gly", 57.021460],
        CGG: ["R", "Arg", 156.10111], CGA: ["R", "Arg", 156.10111], AGA: ["R", "Arg", 156.10111], GGA: ["G", "Gly", 57.021460],
        UGG: ["W", "Trp", 186.07931], UAA: ["STOP", "STOP", 0], UGA: ["STOP", "STOP", 0], UAG: ["STOP", "STOP", 0],
      },
      input: "",
      complement: "",
      reverseComplement: "",
      mRNA: "",
      protein: "",
      proteinWeight: 0,
    };
  }
  
  handleChange = (event) => {
    let inputFormatted = event.target.value.replace(/[^AaTtCcGg]/g, "").toUpperCase();
    let complement = this.getComplement(inputFormatted);
    let mRNA = this.getmRNAfromDNA(inputFormatted);
    let proteinDetails = this.getProteinDetails(mRNA);
    let protein = proteinDetails[0];
    let proteinWeight = proteinDetails[1];

    this.setState({
      input: inputFormatted,
      complement: complement,
      mRNA: mRNA,
      protein: protein,
      proteinWeight: proteinWeight,
    });
  };

  handleReverse = () => {
    let reversedInput = this.state.input.split("").reverse().join("");
    let reversedComplement = this.state.complement.split("").reverse().join("");
    let reversedmRNA = this.state.mRNA.split("").reverse().join("");
    let reversedProtein = this.getProteinDetails(reversedmRNA)[0];
    this.setState({
      input: reversedInput,
      mRNA: reversedmRNA,
      complement: reversedComplement,
      protein: reversedProtein,
    })
  }

  getmRNAfromDNA(dna) {
    let upperCaseDNA = dna.toUpperCase();
    let result = "";

    for (let i = 0; i < upperCaseDNA.length; i++) {
      if (upperCaseDNA[i] === "A") {
        result += "U";
      } else if (upperCaseDNA[i] === "T") {
        result += "A";
      } else if (upperCaseDNA[i] === "C") {
        result += "G";
      } else if (upperCaseDNA[i] === "G") {
        result += "C";
      }
    }

    return result;
  }

  getComplement(string) {
    let upperCaseString = string.toUpperCase();
    let result = "";

    for (let i = 0; i < upperCaseString.length; i++) {
      if (upperCaseString[i] === "A") {
        result += "T";
      } else if (upperCaseString[i] === "T") {
        result += "A";
      } else if (upperCaseString[i] === "C") {
        result += "G";
      } else if (upperCaseString[i] === "G") {
        result += "C";
      }
    }

    return result;
  }

  getProteinDetails(mRNA) {
    let readingFrameLen = mRNA.length - mRNA.length % 3;
    let protein = "";
    let weight = 0;

    for (let i = 0; i < readingFrameLen; i += 3) {
      let codon = mRNA.substring(i, i + 3);
      let aminoAcid = this.state.aminoAcidTable[codon][1];
      let aminoAcidWeight = this.state.aminoAcidTable[codon][2];
      protein += aminoAcid + "-";
      weight += aminoAcidWeight;
    }

    // If the mRNA is not multiple of 3, this appends the remaining nucleotides
    protein += mRNA.substring(readingFrameLen, mRNA.length);

    // Removing the last - 
    protein = protein[protein.length - 1] === "-"
      ? protein.substring(0, protein.length - 1)
      : protein

    return [protein, weight];
  }

  render() {
    return (
      <Styles>
        <div className="input">
          <Container>
            <h1>Enter your DNA strand</h1>
            <Form inline>
              <Form.Group>
                <Form.Control 
                  style={{fontFamily: "Source Code Pro"}} 
                  value={this.state.input} 
                  onChange={this.handleChange}
                />
                  <Button 
                    className="customButton" 
                    onClick={this.handleReverse}
                    variant="light"
                  >
                    Reverse
                  </Button>
              </Form.Group>
            </Form>
          </Container>
        </div>

        <div className="result">
          <Container>
            <h3>
              Complement
            </h3>
            <Form inline>
              <Form.Group>
                <Form.Control 
                  style={{fontFamily: "Source Code Pro"}} 
                  value={this.state.complement} 
                />
                <CopyToClipboard text={this.state.complement}>
                  <Button className="customButton" variant="light">Copy</Button>
                </CopyToClipboard>
              </Form.Group>
            </Form>

            <br></br>
            <br></br>

            <h3>
              mRNA
            </h3>
            <Form inline>
              <Form.Group>
                <Form.Control 
                  style={{fontFamily: "Source Code Pro"}} 
                  value={this.state.mRNA} 
                />
                <CopyToClipboard text={this.state.mRNA}>
                  <Button className="customButton" variant="light">Copy</Button>
                </CopyToClipboard>
              </Form.Group>
            </Form>
            
            <br></br>
            <br></br>

            <h3>
              Protein
            </h3>
            <Form inline>
              <Form.Group>
                <Form.Control 
                  style={{fontFamily: "Source Code Pro"}} 
                  value={this.state.protein} 
                />
                <CopyToClipboard text={this.state.protein}>
                  <Button className="customButton" variant="light">Copy</Button>
                </CopyToClipboard>
              </Form.Group>
            </Form>

            <br></br>
            <br></br>

            <h3>
              Protein Weight
            </h3>
            <Form inline>
              <Form.Group>
                <Form.Control 
                  style={{fontFamily: "Source Code Pro"}} 
                  value={this.state.proteinWeight} 
                />
                <CopyToClipboard text={this.state.proteinWeight.toFixed(5)}>
                  <Button className="customButton" variant="light">Copy</Button>
                </CopyToClipboard>
              </Form.Group>
            </Form>

            <br></br>
            <br></br>
          </Container>
        </div>
      </Styles>
    );
  }
}

export default Home;
