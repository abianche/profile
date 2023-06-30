import 'package:flutter/material.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

class IconLink extends StatefulWidget {
  const IconLink({
    super.key,
    required this.url,
    required this.icon,
  });

  final String url;
  final FaIcon icon;

  @override
  State<IconLink> createState() => _IconLinkState();
}

class _IconLinkState extends State<IconLink> {
  Color color = Colors.white;

  Future<void> _launchUrl(String url) async {
    if (!await launchUrl(Uri.parse(url))) {
      throw Exception('Could not launch $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    return MouseRegion(
      onEnter: (_) {
        setState(() {
          color = const Color(0xfffde68a);
        });
      },
      onExit: (_) {
        setState(() {
          color = Colors.white;
        });
      },
      child: IconButton(
        icon: widget.icon,
        onPressed: () {
          _launchUrl(widget.url);
        },
        color: color,
        splashColor: Colors.transparent,
        hoverColor: Colors.transparent,
        highlightColor: Colors.transparent,
      ),
    );
  }
}
