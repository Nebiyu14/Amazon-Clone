import numeral from "numeral";

function NumeralFormat({ amount }) {
  return (
    <div>
      <strong>${numeral(amount).format("0,0.00")}</strong>
    </div>
  );
}

export default NumeralFormat;
