import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

ThemeData getThemeData() {
  return ThemeData(
    brightness: Brightness.dark,
    scaffoldBackgroundColor: const Color(0xff212121),
    appBarTheme: const AppBarTheme(
      color: Color(0xff212121),
      titleTextStyle: TextStyle(
        color: Colors.white,
      ),
    ),
    textTheme: GoogleFonts.notoSansTextTheme().apply(
      bodyColor: Colors.white,
      displayColor: Colors.white,
    ),
    iconTheme: const IconThemeData(
      color: Colors.white,
      size: 36.0,
    ),
    dialogTheme: const DialogTheme(
      backgroundColor: Color(0xff212121),
      iconColor: Colors.white,
    ),
    listTileTheme: const ListTileThemeData(
      selectedColor: Color(0xfffde68a),
    ),
    textButtonTheme: TextButtonThemeData(
      style: ButtonStyle(
        foregroundColor: MaterialStateProperty.all(Colors.white),
      ),
    ),
  );
}
