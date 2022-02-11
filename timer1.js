const timer = () => {
  const input = [];
  for (let i = 0; i < process.argv.slice(2).length; i++) {
    input.push(Number(process.argv[i + 2]));
  }
  const output = input.sort((a, b) => {
    return a - b;
  });
  output.forEach((time) => {
    setTimeout(() => {
      console.log("beep");
    }, time * 1000);
  });
};

timer();
