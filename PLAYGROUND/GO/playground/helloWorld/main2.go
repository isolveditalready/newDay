package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, req *http.Request) {
		w.Header().Set("Content-Type", "text/plain; charset=utf-8") // normal header
		d, err := ioutil.ReadAll(req.Body)
		if err != nil {
			//w.WriteHeader(http.StatusBadRequest)
			//w.Write([]byte("Ooops"))
			// instead of above 2
			http.Error(w, "Oops", http.StatusBadRequest)
			return
		}
		log.Printf("Data %s\n", d)
		fmt.Fprintf(w, "Hello %s", d)

	})
	http.HandleFunc("/goodbye", func(http.ResponseWriter, *http.Request) {
		log.Println("later World")
	})
	http.ListenAndServe(":9090", nil)
}
