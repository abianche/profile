import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:profile/widgets/icon_link.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  double getImageSize(Size size) {
    if (size.width >= 960) {
      return 350.0;
    }
    if (size.width >= 720) {
      return 280.0;
    }

    return 190.0;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SingleChildScrollView(
        child: SelectionArea(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Center(
              child: Column(
                children: [
                  const Text(
                    "ALESSIO BIANCHETTI",
                    style: TextStyle(
                      fontSize: 24.0,
                      fontWeight: FontWeight.w400,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 18.0),
                  ClipRRect(
                    borderRadius: BorderRadius.circular(16.0),
                    child: Image.asset(
                      "assets/images/profile.png",
                      filterQuality: FilterQuality.high,
                      height: getImageSize(MediaQuery.of(context).size),
                    ),
                  ),
                  const Text(
                    "Computer scientist",
                    style: TextStyle(
                      fontSize: 50.0,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const Text(
                    "Master of Science",
                    style: TextStyle(
                      fontSize: 18.0,
                      fontWeight: FontWeight.bold,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 36.0),
                  const Padding(
                    padding: EdgeInsets.all(24.0),
                    child: SizedBox(
                      width: 800.0,
                      child: Text(
                        "I've been a computer science enthusiast for as long as I can remember. I'm always trying to master whatever I am doing without losing focus. However, I also keep an eye open to what's new out there. I am an early adopter and a remote worker.",
                        style: TextStyle(
                          fontSize: 18.0,
                          fontStyle: FontStyle.italic,
                          fontWeight: FontWeight.w100,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ),
                  ),
                  const SizedBox(height: 18.0),
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      IconLink(
                        icon: FaIcon(FontAwesomeIcons.envelope),
                        url: "mailto:alessio.bianchetti@gmail.com",
                      ),
                      IconLink(
                        icon: FaIcon(FontAwesomeIcons.github),
                        url: "https://github.com/abianche",
                      ),
                      IconLink(
                        icon: FaIcon(FontAwesomeIcons.linkedin),
                        url: "https://www.linkedin.com/in/alessio-bianchetti",
                      ),
                      IconLink(
                        icon: FaIcon(FontAwesomeIcons.instagram),
                        url: "https://www.instagram.com/alessio.bianchetti",
                      ),
                    ],
                  ),
                  const SizedBox(height: 18.0),
                  const Row(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text(
                        "Made with ",
                        style: TextStyle(
                          fontSize: 14.0,
                          color: Colors.grey,
                        ),
                        textAlign: TextAlign.center,
                      ),
                      FaIcon(
                        FontAwesomeIcons.solidHeart,
                        size: 14.0,
                        color: Colors.red,
                      ),
                      Text(
                        " using Flutter",
                        style: TextStyle(
                          fontSize: 14.0,
                          color: Colors.grey,
                        ),
                        textAlign: TextAlign.center,
                      ),
                    ],
                  ),
                  Text(
                    "© ${DateTime.now().year} Alessio Bianchetti",
                    style: const TextStyle(
                      fontSize: 14.0,
                      color: Colors.grey,
                    ),
                  ),
                  const Text(
                    "All rights reserved",
                    style: TextStyle(
                      fontSize: 14.0,
                      color: Colors.grey,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  TextButton(
                    onPressed: () {
                      showAboutDialog(
                        context: context,
                        applicationLegalese: "© ${DateTime.now().year} Alessio Bianchetti",
                      );
                    },
                    child: const Text(
                      "Licenses",
                      style: TextStyle(
                        fontSize: 14.0,
                        color: Colors.grey,
                      ),
                      textAlign: TextAlign.center,
                    ),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
