#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <emscripten/emscripten.h>

int print_date() {
    time_t t = time(NULL);
    struct tm tm = *localtime(&t);

    printf("now: %d-%d-%d %d:%d:%d\n", tm.tm_year + 1900, tm.tm_mon + 1, tm.tm_mday, tm.tm_hour, tm.tm_min, tm.tm_sec);

}

int main(int argc, char ** argv)
{
    printf("WASM loaded\n");
    print_date();
    EM_ASM(
            var element = document.createElement('div');
            element.innerHTML = "Wasm working ";
            document.body.appendChild(element);
      );
}

//// Simple C function that returns a number between 1 and 6.
int EMSCRIPTEN_KEEPALIVE roll_dice() {
    srand ( time(NULL) );
    return rand() % 6 + 1;
}

int EMSCRIPTEN_KEEPALIVE sum(int a, int b) {
    return a + b;
}


int EMSCRIPTEN_KEEPALIVE fib(int n)
{

//    printf("%d\n", sizeof(long long));

   long long first = 0, second = 1, next, c;

   for ( c = 0 ; c < n ; c++ )
   {
      if ( c <= 1 )
         next = c;
      else
      {
         next = first + second;
         first = second;
         second = next;
      }
   }

   return next;
}


