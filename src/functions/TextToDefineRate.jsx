function TextToDefineRate(rate) {
  switch (rate) {
    case rate <= 1:
      return "Too bad";
    case 1 < rate < 2.5:
      return "medium";
    case 2.5 < rate < 4:
      return "good";
    case rate >= 4:
      return "excellent";
    default:
      return "good";
  }
}

export default TextToDefineRate;
