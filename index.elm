module Main exposing (main)

import Browser
import Browser.Dom exposing (Viewport, getViewport)
import Browser.Events exposing (onMouseMove, onResize)
import Html exposing (Html, a, div, img, p, text)
import Html.Attributes exposing (alt, href, src, style, width)
import Html.Events as Events
import Json.Decode as Json exposing (Decoder)
import Result exposing (Result)
import String
import Task


type alias Position =
    { x : Float
    , y : Float
    }


type alias Size =
    { width : Float
    , height : Float
    }


type alias Model =
    { position : Position
    , size : Size
    }


type Msg
    = Resize Float Float
    | Move Float Float


main : Program () Model Msg
main =
    Browser.element
        { view = view
        , update = update
        , subscriptions =
            \_ ->
                Sub.batch
                    [ onResize (\w h -> Resize (toFloat w) (toFloat h))
                    , onMouseMove mousePosition
                    ]
        , init =
            \_ ->
                ( { position = Position 0 0, size = Size 0 0 }
                , Task.perform
                    (\{ viewport } ->
                        Resize viewport.width viewport.height
                    )
                    getViewport
                )
        }


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Resize width height ->
            ( { model | size = Size width height }, Cmd.none )

        Move x y ->
            ( { model | position = Position x y }, Cmd.none )


rect : List Float -> String
rect list =
    list
        |> List.map (\number -> String.fromFloat number ++ "px")
        |> String.join ","
        |> (\st -> "rect(" ++ st ++ ")")


view : Model -> Html Msg
view { position, size } =
    let
        paddingLeft =
            if size.width < 600 then
                40

            else
                80

        paddingTop =
            size.height / 4

        imageWidth =
            size.width - paddingLeft * 2

        imageHeight =
            imageWidth / 1250 * 328

        positionX =
            position.x - paddingLeft

        fontSize =
            round (min 24 (max 14 (imageHeight * 0.07)))
    in
    div
        [ style "padding" (String.fromFloat paddingTop ++ "px " ++ String.fromFloat paddingLeft ++ "px 0")
        , style "position" "absolute"
        , style "left" "0"
        , style "top" "0"
        , style "width" "100%"
        , style "box-sizing" "border-box"
        ]
        [ img
            [ src "assets/coming-soon.svg"
            , alt "coming soon, vectorized"
            , width (round imageWidth)
            , style "position" "absolute"
            , style "clip" (rect [ 0, positionX, imageHeight, 0 ])
            ]
            []
        , img
            [ src "assets/coming-soon.png"
            , alt "coming soon, written on paper"
            , width (round imageWidth)
            , style "position" "absolute"
            , style "clip" (rect [ 0, imageWidth, imageHeight, positionX ])
            ]
            []
        , if positionX > 0 && positionX < imageWidth then
            div
                [ style "position" "absolute"
                , style "width" "2px"
                , style "height" (String.fromFloat imageHeight ++ "px")
                , style "background-color" "#24a4ad"
                , style "left" (String.fromFloat (positionX + paddingLeft - 1) ++ "px")
                ]
                []

          else
            div [] []
        , p
            [ style "padding-top" (String.fromFloat (imageHeight * 1.2) ++ "px")
            , style "padding-left" (String.fromFloat (imageWidth / 20) ++ "px")
            , style "max-width" (String.fromFloat (max 300 (imageWidth * 0.6)) ++ "px")
            , style "line-height" "1.5"
            , style "font-family" "Montserrat, sans-serif"
            , style "font-weight" "400"
            , style "font-size" (String.fromInt fontSize ++ "px")
            , style "color" "#35190c"
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


mousePosition : Json.Decoder Msg
mousePosition =
    Json.map2
        Move
        (Json.field "pageX" Json.float)
        (Json.field "pageY" Json.float)
