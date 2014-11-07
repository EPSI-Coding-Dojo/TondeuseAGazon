#La tondeuse à gazon

Après avoir travaillé dur et être devenu le nouveau Mark Zuckerberg, quoi de plus gratifiant qu’une grande maison avec un splendide jardin ? Mais attention, l’entretien d’une pelouse demande du travail et peut être très rébarbatif. Alors essayons de nous amuser avec des tondeuses à gazon !

###Sujet
Vous allez devoir modéliser une tondeuse qui se déplace dans un jardin, assimilé à une grille de longueur L et de largeur l. La case tout en haut à gauche représente l’origine, elle a pour coordonnées (0,0). La tondeuse se déplace de case en case, et peut effectuer 3 mouvements :

* Avancer dans la case face à elle.
* Pivoter vers la gauche (sans avancer).
* Pivoter vers la droite (sans avancer).

###But
Le but de l’exercice est de récupérer une séquence d’instructions déterminants les mouvements de la tondeuse, et d’indiquer la position finale de la tondeuse.

###Obstacles
Des obstacles sont également présents dans la grille. Si la tondeuse arrive sur l’un d’entre eux, elle ne pourra pas avancer, et l’instruction en cours ne pourra pas être effectuée. La même situation se produit si la tondeuse arrive au bord du jardin.

Notez que toutes les couples d’entiers représentant une position sont au format (colonne, ligne). Ainsi (5,10) code une position dans la colonne 5 et la ligne 10. On partira du principe que la 1ère colonne et la 1ère ligne ont le numéro 0 (la colonne portant le numéro 5 est donc la 6e ligne).

###Input
Les données d’entrée sont structurées ainsi :
 
1.  Deux entiers représentant les dimensions de la grille, en 1er le nombre de colonnes, puis le nombre de lignes.

2. Deux autres entiers précisant la position initiale de la tondeuse sur la grille (colonne puis ligne). On rappelle que la case (0,0) se trouve en haut à gauche de la grille.

3.  Un caractère déterminant la direction initiale de la tondeuse : H (haut), B (bas), G (gauche), D (droite).

4. Un entier N donnant le nombre d’obstacles sur la grille.

5. N couples d’entiers indiquant les coordonnées de chaque obstacle.

6. Une chaine de caractères contenant la liste des instructions à effectuer : A (avancer), G (pivoter à gauche), D (pivoter à droite)

###Outpu
Il faudra indiquer en sortie 2 entiers, les coordonnées finales de la tondeuse (colonne en 1er, puis ligne), ainsi que la lettre correspondant à la direction finale.

###Exemple

10 6

6 2 

D 

1 

4 4 

DADAGADAGAAGAA

En sortie, on attend les deux entiers et la lettre suivants :

7

5 

D