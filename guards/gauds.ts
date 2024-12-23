export async function Guards(context: any) {
  return (guards: Function[]) => {
    for (let i = 0; i < guards.length; i++) {
      const response = guards[i];
      if (response) {
        return response;
      }
    }
  };
  // throw new Error(`Invalid User-Agent: ${userAgent}`)

  // data retriaval logic ...

  return null;
  return {
    props: {
      // ...
    },
  };
}
