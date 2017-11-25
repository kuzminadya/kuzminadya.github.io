module Main exposing (main)

import Html.Attributes exposing (style, src, width, href, alt)
import Html exposing (Html, div, img, text, p, a)
import Mouse exposing (Position)
import Window exposing (Size)
import Task
import String


type alias Model =
    { position : Position
    , size : Size
    }


type Msg
    = Resize Size
    | Move Position


main : Program Never Model Msg
main =
    Html.program
        { view = view
        , update = update
        , subscriptions =
            \_ ->
                Sub.batch
                    [ Mouse.moves Move
                    , Window.resizes Resize
                    ]
        , init =
            ( { position = Position 0 0, size = Size 0 0 }
            , Task.perform Resize Window.size
            )
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Resize size ->
            ( { model | size = size }, Cmd.none )

        Move position ->
            ( { model | position = position }, Cmd.none )


rect : List number -> String
rect list =
    list
        |> List.map (\number -> toString number ++ "px")
        |> String.join ","
        |> \st -> "rect(" ++ st ++ ")"


view : Model -> Html Msg
view { position, size } =
    let
        paddingLeft =
            if size.width < 600 then
                40
            else
                80

        paddingTop =
            round (toFloat size.height / 4)

        imageWidth =
            size.width - paddingLeft * 2

        imageHeight =
            round (toFloat imageWidth / 1250 * 328)

        positionX =
            position.x - paddingLeft

        fontSize =
            round (min 24 (max 14 (toFloat imageHeight * 0.07)))
    in
        div
            [ style
                [ ( "padding", toString paddingTop ++ "px " ++ toString paddingLeft ++ "px 0" )
                ]
            ]
            [ img
                [ src "assets/coming-soon.svg"
                , alt "coming soon, vectorized"
                , width imageWidth
                , style
                    [ ( "position", "absolute" )
                    , ( "clip", rect [ 0, positionX, imageHeight, 0 ] )
                    ]
                ]
                []
            , img
                [ src "assets/coming-soon.png"
                , alt "coming soon, written on paper"
                , width imageWidth
                , style
                    [ ( "position", "absolute" )
                    , ( "clip", rect [ 0, imageWidth, imageHeight, positionX ] )
                    ]
                ]
                []
            , if positionX > 0 && positionX < imageWidth then
                div
                    [ style
                        [ ( "position", "absolute" )
                        , ( "width", "2px" )
                        , ( "height", toString imageHeight ++ "px" )
                        , ( "background-color", "#24a4ad" )
                        , ( "left", toString (positionX + paddingLeft - 1) ++ "px" )
                        ]
                    ]
                    []
              else
                div [] []
            , p
                [ style
                    [ ( "padding-top", toString (toFloat imageHeight * 1.2) ++ "px" )
                    , ( "padding-left", toString (toFloat imageWidth / 20) ++ "px" )
                    , ( "max-width", toString (max 300 (toFloat imageWidth * 0.6)) ++ "px" )
                    , ( "line-height", "1.5" )
                    , ( "font-family", "Montserrat, sans-serif" )
                    , ( "font-weight", "400" )
                    , ( "font-size", toString fontSize ++ "px" )
                    , ( "color", "#35190c" )
                    ]
                ]
                [ text "Hi, I’m Nadya Kuzmina. I study interface design at the University of Applied Sciences in Potsdam. You can find me on "
                , a [ href "https://github.com/kuzminadya" ] [ text "github" ]
                , text ", "
                , a [ href "https://twitter.com/nadya_nabl" ] [ text "twitter" ]
                , text ", "
                , a [ href "https://www.instagram.com/doublnabl" ] [ text "instagram" ]
                , text " or contact me by "
                , a [ href "mailto:hi@nadyakuzmina.com" ] [ text "email" ]
                , text "."
                ]
            ]
