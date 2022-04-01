export async function handler(event) {
      console.log("** SUBSCRIBER ** ");
      console.log(" PATIENT UPDATED:", event);
      return true;
}
