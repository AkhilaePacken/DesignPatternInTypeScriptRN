function SingletonFun(component: React.FC) {
  // Singleton instance
  let instance: React.FC | null = null;

  // Function to get or create the Singleton instance
  if (!instance) {
    instance = component; // Singleton component
  }
  return instance;
}

export default SingletonFun;
