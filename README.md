# outside-rick-and-morty

A tiny Rick and Morty explorer app for Outside

### Serving the app

This app is bootstrapped using Expo CLI, so that it may easily be viewed in [Expo Go](https://apps.apple.com/us/app/expo-go/id982107779).
Once Expo Go is installed, follow these steps to view the project.

```bash
$ git clone git@github.com:mythrandeer/outside-rick-and-morty.git

$ cd outside-rick-and-morty

$ yarn install

$ yarn start
```

After these steps, you'll be presented with a QR code. When you scan it using your iPhone camera, you'll be prompted to open using Expo Go.
Once you tap on the prompt, Expo Go should open up and load the app. The app experience would look like this:

https://user-images.githubusercontent.com/68562152/207467254-660df186-ad2c-4ac9-8972-846efa921be3.MP4

---

### Releasing to App Store

While I have no visibility over the build process at Outside (Expo EAS, VS AppCenter or Xcode Cloud), I remember Jenn stating that the app has
been made available on TestFlight for testing and would like to assume that the Distribution Certificate and Provisioning Profile have been provisioned
and the _Signing & Capabilities_ tab on XCode looks something like this for your project.

<img width="762" alt="Screen Shot 2022-12-13 at 3 40 20 PM" src="https://user-images.githubusercontent.com/68562152/207469022-eef8076e-668c-4ded-8c83-874029c76666.png">

To illustrate the bare minimum steps required to release the app from TestFlight, I'll utilize my own Apple account and an app that I manage - MasterCFA.

1. Assuming the Outside app has already been created on App Store Connect, prepare to release a new version by clicking the **+** icon next to the app and specifying the version we want to release. This version should correspond to the version we want to release from TestFlight (eg. specify 1.1.1 if the latest version is 1.1.1 on TF). We should then enter a state where we prepare for submission of the specified version.
   <img width="244" alt="Screen Shot 2022-12-13 at 4 02 05 PM" src="https://user-images.githubusercontent.com/68562152/207472093-0342b53c-c689-4958-9a70-4a497fda1c36.png">

2. We then need to ensure that the promotional metadata for the app is appropriately prepared. This includes product screenshots on iPhone (and iPad if we support it), app description and product keywords. We would also need to specify what's new being released in the version.
   <img width="836" alt="Screen Shot 2022-12-13 at 3 56 57 PM" src="https://user-images.githubusercontent.com/68562152/207471207-cdb64b9e-09ca-414f-b857-a115e8cb1ad1.png">

3. Next, we need to ensure we add Support and Marketing URLs (which could simply be the landing page URL), as well as the Copyright entity (eg. 2022 XYZ LLP).
4. Then, we select the build we want to release from TestFlight. As mentioned earlier, we'll only be able to view the TestFlight version corresponding to the version we're preparing to submit. Eg. if we're preparing version 1.1.16, we'll only be able to submit builds with version 1.1.16 on TestFlight.

<img width="788" alt="Screen Shot 2022-12-13 at 4 20 17 PM" src="https://user-images.githubusercontent.com/68562152/207474007-2537e5ae-0d83-47f9-a4f3-2e352f99d4c8.png">
5. Lastly, we need to ensure that *App Review Information* is also appropriately setup. Especially, if we have content behind an authentication, else the app would get rejected in review.

<img width="1135" alt="Screen Shot 2022-12-13 at 4 25 23 PM" src="https://user-images.githubusercontent.com/68562152/207474477-82601754-b87b-4afd-a233-a3a13e19b40d.png">

6. We can then proceed to Save the submission, Add for Review and finally Submit for Review. Usually the Apple review team may take anywhere between a couple of hours to a day to review. Once the app is reviewed, we could manually release the app or have it automatically released.

Of course, if the app requires In App Purchases or Subscription, there would be quite a few steps for setting up the Banking agreements as well, which I have also managed before.
