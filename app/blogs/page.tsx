"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Clock,
  Search,
  Eye,
  Heart,
} from "lucide-react";
import { format } from "date-fns";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const blogPosts = [
    {
      id: 1,
      title: "Chess Pieces: Understanding Their Powers and Movements",
      content: `
# Chess Pieces


![Starting chess board with all the pieces.](https://c4.wallpaperflare.com/wallpaper/51/1017/286/playing-chess-wallpaper-thumb.jpg)


Each piece in chess has its own unique powers. To become great at chess you must understand these powers and how they can be used to win the game. For each individual chess piece we will look at the starting position, movements, notation, general overview, and some additional pro tips to speed up the learning curve.


There are 6 unique chess pieces. They are:
- King
- Rook
- Bishop
- Queen
- Knight
- Pawn


This page will cover where the chess pieces should start the game, how they move, how their moves are notated, and how good they are relative to the other chess pieces.


## The King
The king is the piece with a cross at the top. This may not be the most powerful piece in chess, but it certainly is the most important. If you lose your king, you have lost the game. At the beginning of the game you want to make sure to protect your king. Later in the game, the king can become a very powerful ally in your offense so be prepared to use it.


The kings start on the e1 and e8 squares. The white king should be on a dark square. The black king starts on a light square.


### Overview
The white chess king begins on the e1 square and the black king begins on the e8 square. This should be the opposite color of the king. If the e1 square is white, then you will need to rotate the board so the e1 square is dark.


### Movement
The king can move one square in any direction. It can’t jump over material so at the start of a chess game there are no legal moves for the king to make since it is surrounded by other pieces.


When a king moves to a square you will see something like Ke5. The K represents the king and e5 represents the square it is moving to. If there was a piece on e5 that the king is capturing then you will see the notation written Kxe5. The x shows that a piece was captured.


The one limitation the king has when moving is that it can’t move to a square that is being attacked by an opponent’s pieces. In ex. A you can see that the king can take the rook on e4 with Kxe4 because the rook is not defended by another piece. The king, however, can’t take the knight on b4 because that square is being defended by the rook.


![The king can move one square in any direction.](https://hi-static.z-dn.net/files/d7e/29f787aabac98e0993782132094e73d9.jpg)


*Example A: The king can take the rook, because it’s not defended. It can’t take the knight because it is defended.*


*The King moves from d4 to e5. This move would be notated as Ke5.*


### Check and Checkmating the King
*Example B: It’s white’s move and the king is under attack. With no safe squares to move, this is checkmate. Black wins.*


If one side attacks the opponents king that is called check. If the king is under attack and there are no moves that would keep the king from being capture that is checkmate, and the game is over. Take a look in ex. B where it’s white’s move. The king is under attack by black’s rook, but there are no safe squares for the white king to move to. This is checkmate and the game is over.


## The Rook
The rook is the piece that looks like a castle. The is a very strong piece, also referred to as a major piece, and is outranked only by queen.


![Each side starts with two rooks placed on the four corners of the chess board.](https://t3.ftcdn.net/jpg/02/69/09/28/360_F_269092843_voyFbPIfaH6fZk9TDMeWbNjZw4knJsc5.jpg)


### Overview
Each side starts with two rooks located in the four corners of the board. Rooks are worth 5 points in chess. While points don’t tell the entire story in a chess game, it does give some indication for how strong a piece is. If you give up a 3 point piece in chess in exchange for your opponents rook, that is generally a good trade for you.


### Movement
The rook can move any number of squares up, down, and across. It can’t jump over material so at the beginning of the game, it also can’t move.


At the beginning of the game the rook is surrounded by a pawn and a knight. One mistake that beginners make is they never unleash the rook into the game. The rook rarely gets involved early in the game but you need to find a way later in the game to use the rook or you will have missed out on of your strongest pieces contributing to the game.


When a rook moves you will see notation such as Re4. The R represents that a rook is moving and the e4 represents the square the rook is moving to. If the rook is capturing material on the e4 square the notation would be Rxe4. It’s also common to have two rooks that can move to the same square. In that case notation would be Re1e4. That means that the Rook from e1 is moving to e4. This is to limit any confusion about another rook that could also move to e4.


![The rook can move vertically or horizontally any number of squares without jumping over another piece.](https://brilliant-staff-media.s3-us-west-2.amazonaws.com/tiffany-wang/MTXdYoA8k9.png)


*At the beginning of the game the rook is blocked in by the pawn and knight.*


*Both rooks can move to e4. Since the rook on d1 moves to d4 the chess notation would be Rd1d4.*


## The Bishop
The bishop is not quite as strong as the rook, and is referred to as a minor piece. It can still cover a lot of ground and works will in pairs.


![Each side starts with two bishops. One bishop will be on a light square and one on a dark square.](https://i.ytimg.com/vi/NoXmQA7IDco/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCnGAePCJNDsEJDUCHv2gOW2u7eeQ)


### Overview
You begin with two bishops. They are located right next to the king and the queen. You will have one bishop that is on the light squares and one bishop on the dark squares. They will always stay on the same color square the entire game. The bishop is worth 3 points in a chess game, equivalent to a knight.


### Movement
The bishop can move diagonally as many squares as it would like, without jumping over another piece. When a bishop moves you will see notation such as Be4. The B represents the bishop and e4 represents the square it is moving to. If the bishop is capturing material on e4 then it would be written as Bxe4. At the beginning of the game bishops are blocked by pawns, but you usually will be moving your pawns early on. The opens up the door for the bishops to get involved in the game. Bishops will be one of the primary pieces you will use in the early game to attack your opponent.


![Bishops can move diagonally any number of squares without jumping over another piece.](https://cdn.shopify.com/s/files/1/0630/9543/9612/files/Weixin_Screenshot_20230814154151_2048x2048.png?v=1691998983)


*Bishops are initially blocked by pawns but will be one of the first pieces you move in a chess game.*


## The Queen
The queen is the piece with a crown on top, but no cross. This is the most powerful chess piece and combines the moves of both the rook and the bishop. Like the rook, it is considered a major piece in chess.


![The queen starts right next to the king. They should be on the d1 and d8 squares.](https://i.ytimg.com/vi/YV2c-EvWqQw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAqclqr4OVOWjK0wmMQOCD9p88lWQ)


### Overview
The queens begin on the d1 and d8 squares. This should be the same color as the queen. If you see the d1 square is a dark square then you need to rotate the board so the d1 square is a light color square. Using the queen correctly is one of the most important parts of chess. It is powerful, so you want to use it, but if it’s not protected your opponent can capture your queen and generally leads to a quick loss. The queen is worth 9 points, which is more than a rook a bishop combined.


### Movement
The queen combines the moves from the bishop and rook. It can move any squares in a diagonal direction, or go up, down, and sideways as many squares without jumping over another piece.


When a queen moves you will generally see the notation as Qh4. The Q represents the queen and h4 represents the square the queen is moving to. If the queen is capturing material on h4 then it would be notated Qxh4.


![The queen can move vertically, horizontally, or diagonally any number of squares.](https://i.ytimg.com/vi/_xTYIIRzIug/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD7ZoWzQFH5t6oqg-NNvxgaRMuVXw)


*The queen moves to the d5 square and is notated Qd5.*


Early in a chess game you usually don’t want to move your queen very much. It will support your pawns, bishops, and knights. As you approach the middle game (15 or so moves into the game), the queen will start to get involved a bit more and play more offense.


## The Knight
The knight is the piece that looks like a horse. This is the most complicated piece to explain as it has a very unique movement. The knight is worth 3 points and is considered a minor piece. It is generally considered as strong as a bishop, but for its own unique reasons. While both pieces are worth 3 points, there will be some positions where the knight will reign supreme.


![Each side starts with two knights. They should be placed on b1/g1 for white and b8/g8 for black.](https://www.cyruscrafts.com/img/cms/blog/knight-chess/knight-chess.jpg)


### Overview
You begin with two knights. They will be located in between your rook and bishops on squares b1/g1 for white and b8/g8 for black.


### Movement
The knight is the only piece on the board that can jump over another piece. In that way, the knight has a leg up on the queen, but controls fewer total squares than the queen can.


The movement of the knight can be thought of as an L. You can think of it as a two-one or a one-two approach. This means that the knight can move two squares up/down/sideways followed by one square to make an L or it can move one square up/down/sideways followed by two squares to make an L. Take a look at ex. C to see the possible squares a knight can go to.


As we mentioned before the knight can jump over material as well. This means that even if the knight is surrounded by material it can still move to the same number of squares (assuming the final destination isn’t occupied by another piece you own).


*Example C: The knight moves in an L shape. It is the only piece that can hop over another piece.*


*Since the knight can jump over pieces, the possible moves are not limited even if the knight is surrounded.*


The knight is the only piece besides the pawn that can move on the very first move in the game.


If a knight moves the notation would be Ne4. The N represents the knight (K is taken by the King) and e4 represents the square it moves to. If there are two knights that can both move to the same square then you would see Nd2e4. This means the knight from d2 moved to e4 instead of another knight that could also move to e4.


![The knight moves in an L shape.](https://afteracademy.com/images/knight-on-a-chessboard-problem-79adbb3aae3caace.jpg)


## The Pawn
The pawn is the basic piece in chess and each side starts with eight. Each pawn is worth 1 point. While that may not seem like a lot, many good chess players can win a chess game if they have a 1 point advantage.


![Each side starts with 8 pawns.](https://lh3.googleusercontent.com/ZTVvbKqZd2vrNBwkjKUxVC1Y1_3u1j9G2oNSjdyBxDnb5B0vyWq2-XzDsW9EYezsTzmR28Feoh-gbwee_L5HmpglUCqttMx-uvC-Gn7LE_YPYZEjWMXtqUM7OcaHa4hGr0I01HKkGm0EceZZD7yqZCs)


### Overview
While the pawn is the weakest piece on the board, it serves a vital role in the game. Most of the early part of the game will be centered around the pawn structure and controlling the center of the board with your pawns. The other pieces will support the pawn in the early stages. Later on the pawns will play more of a supportive role for the minor and major pieces will limiting the squares the opponent can go to.


### Movement
The pawn is the only piece on the chess board that can’t go backwards. It is also the only piece where you can’t move it the same number of squares the entire game. The first time you move a pawn you can move it one or two squares. Once the pawn has moved you can only move the pawn one square after that.


Another distinction is that while the pawn moves forward it can’t capture another piece right in front of it. It can only capture a piece diagonally, but it can’t move diagonally unless it is capturing a piece. Look at ex. D and you can see that the pawn on d5 can’t take the pawn on d6 (located directly in front of it). Instead the only move the pawn can make is to take the pawn on e6.


When a pawn moves you will see the notation e5. This is different from other pieces in that you don’t see a letter specifying what piece is moving. If you only see a square that means the pawn is moving there. If a pawn from d5 is capturing a pawn on e6 then you would see the notation exd6.


![Pawns only move forward. On its 1st move, you can move 1 or 2 squares.](https://www.chess-chivalry.com/cdn/shop/files/Pawn-movement.webp?v=1663602029&width=1500)


*After the pawn has moved it can only move forward one square for the rest of the game.*


*Example D: Pawns can only capture diagonally. It can’t capture a piece directly in front of it.*


### En Passant
There is only special move that a pawn can make called en passant. This can occur only immediately after a pawn moves two squares. If you have a pawn next to the pawn after it has moved two squares you can take this pawn with en passant but you only have one move. Any other move you make will negate the possibility to use en passant.


*Example E: White just moved to d4. Black can capture with en passant.*


*Example F: Black on the next move can capture the white pawn by playing cxd3.*


## Chess Openings
The first few moves in the chess opening lays the foundation for every chess game. Most of the chess openings have been named and analyzed for hundreds of years. It is important if you want to be successful in chess to be familiar with some of the most popular openings and understand the theory behind the moves. In this section we cover everything you need to know about the most popular chess openings.


Many beginners ask what they should study first. While it’s important to understand concepts more than memorizing moves of a particular opening there are a few specific openings that all chess players should start with because they are so widely played. For white, a player should first learn the King’s Gambit, Queen’s Gambit, Ruy Lopez and the English. For black, a player should first learn the Sicilian Defense, French Defense, Scandinavian, and the Slav.
      `,
      author: "Tejavath Naresh",
      authorImage: "/naresh.jpg",
      date: "2025-09-10",
      readTime: "12 min read",
      category: "basics",
      tags: ["Chess Pieces", "Beginner", "Rules"],
      image: "https://www.shutterstock.com/image-photo/chess-pieces-arranged-on-chessboard-600nw-1994555414.jpg",
      views: 1500,
      likes: 120,
      color: "from-[#48BB78] to-[#38A169]",
    },
  ];

  const categories = [
    { id: "all", name: "All Articles", count: blogPosts.length },
    {
      id: "basics",
      name: "Basics",
      count: blogPosts.filter((p) => p.category === "basics").length,
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#6B46C1] to-[#2B6CB0]">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-6 bg-gradient-to-r from-[#6B46C1] to-[#2B6CB0] text-white px-6 py-2 text-lg">
            Chess Blog
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-[#2B6CB0] to-[#6B46C1] bg-clip-text text-white">
            Chess Insights & Articles
          </h1>
          <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
            Discover expert insights, strategic guides, and the latest chess knowledge from our grandmasters and experienced coaches.
          </p>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#EDF2F7] to-[#E6FFFA]">
        <div className="max-w-4xl mx-auto">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="bg-white border-0 shadow-xl hover:shadow-2xl transform hover:scale-101 transition-all duration-300 overflow-hidden"
            >
              <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>
              <CardContent className="p-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover rounded-lg mb-6 border-4 border-[#48BB78] bg-gradient-to-br from-[#48BB78]/20 to-[#38A169]/20"
                />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-[#2B6CB0] to-[#48BB78] bg-clip-text text-transparent mb-4">{post.title}</h2>
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={post.authorImage}
                    alt={post.author}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#48BB78]"
                  />
                  <div>
                    <div className="font-semibold text-gray-800">{post.author}</div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4 text-[#2B6CB0]" />
                        {format(new Date(post.date), "MMM dd, yyyy")}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-[#2B6CB0]" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="w-4 h-4 text-[#2B6CB0]" />
                        {post.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-[#2B6CB0]" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="prose max-w-none mb-6">
                  <ReactMarkdown 
                    remarkPlugins={[remarkGfm]} 
                    components={{
                      img: ({node, ...props}) => (
                        <img
                          className="w-full h-auto my-4 rounded-lg border-4 border-[#48BB78] bg-gradient-to-br from-[#48BB78]/20 to-[#38A169]/20"
                          {...props}
                          alt={props.alt || ""}
                        />
                      ),
                      h1: ({node, ...props}) => (
                        <h1 {...props} className="text-2xl font-bold mt-6 mb-4 bg-gradient-to-r from-[#2B6CB0] to-[#48BB78] bg-clip-text text-transparent" />
                      ),
                      h2: ({node, ...props}) => (
                        <h2 {...props} className="text-xl font-semibold mt-4 mb-2 text-[#2B6CB0]" />
                      ),
                      li: ({node, ...props}) => (
                        <li {...props} className="ml-6 text-[#DD6B20]" />
                      ),
                      p: ({node, ...props}) => (
                        <p {...props} className="mb-4 text-gray-800" />
                      ),
                    }}
                  >
                    {post.content}
                  </ReactMarkdown>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-[#48BB78] text-[#48BB78]">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#F6E05E] to-[#DD6B20]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#2B6CB0] w-5 h-5" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 border-[#9F7AEA] focus:border-[#2B6CB0] bg-white"
              />
            </div>

            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-full lg:w-48 h-12 border-[#9F7AEA] focus:border-[#2B6CB0] bg-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-[#F6E05E] to-[#DD6B20] text-gray-800"
                    : "border-[#F6E05E] text-[#DD6B20] hover:bg-[#F6E05E]/20 bg-white"
                }
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
