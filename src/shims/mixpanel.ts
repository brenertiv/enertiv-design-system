export const MixEvents = new Proxy(
  {},
  { get: () => "" },
) as Record<string, string>;

export const Mixpanel = {
  track: () => undefined,
  identify: () => undefined,
  people: { set: () => undefined, increment: () => undefined },
};

export default Mixpanel;
